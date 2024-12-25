import z from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../Models/uesr.model.js";

const isValid = z.object({
  fullname: z.string().min(3).max(100),
  email: z.string().min(3).max(100).email(),
  password: z.string().min(3).max(100),
});

export const Signup = async (req, res) => {
  try {
    const { fullname, email, password } = isValid.parse(req.body);

    const isUser = await userModel.findOne({
      email,
    });

    if (isUser) {
      return res.status(400).json({
        message: "User already exist",
        success: false,
      });
    }

    const doublepass = await bcrypt.hash(password, 12);

    await userModel.create({
      fullname: fullname,
      email: email,
      password: doublepass,
    });

    return res.status(200).json({
      message: "Your signup page work well !",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error , please try again later",
      success: false,
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let isUser = await userModel
      .findOne({
        email,
      })
      
    if (!isUser) {
      return res.status(400).json({
        message: "User not exist !",
        success: false,
      });
    }

    const isValid = await bcrypt.compare(password, isUser.password);

    if (!isValid) {
      return res.status(401).json({
        message: "Please enter valid password !",
        success: false,
      });
    }

    const userID = isUser._id;

    const token = jwt.sign(
      {
        userID,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    isUser = {
      _id: isUser._id,
      fullname: isUser.fullname,
      email: isUser.email,
      history: isUser.history,
    };

    res.cookie("token", token, { maxAge: 7 * 24 * 60 * 60 * 1000 });

    return res
      .status(200)
      .json({ message: "Login Now", isUser, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error , please try again !",
      success: false,
    });
  }
};

//for user Logout
export const Logout = (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Your are logout now !",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error , please try again ",
      success: false,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname } = req.body;

    if (!fullname) {
      return res.status(400).json({
        message: "Please enter your name !",
        success: false,
      });
    }

    const id = req.id;

    const isUser = await userModel.findById({
      id,
    });

    isUser = {
      fullname: fullname,
    };

    await isUser.save();

    return res.status(200).json({
      message: "User name updated !",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server erro , please try again !",
      success: false,
    });
  }
};
