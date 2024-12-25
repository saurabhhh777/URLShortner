import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setRuser } from "./redux/authSlice";

const Signin = () => {

  const{ruser} = useSelector(store=>store.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setUser((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const responce = await axios.post(
        "https://urlshortner-backend-m49y.onrender.com/api/v1/user/login",
        user
      );
      console.log(responce.data);
      if (responce.data.success) {

        dispatch(setRuser(responce.data.isUser));

        navigate("/");
        toast.success(responce.data.message); // Correct success toast
      } else {
        setError(responce.data.message);
        toast.error(responce.data.message); // Correct error toast
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message || "Password error!"); // Correct error toast
        setError(error.response.data.message || "Password error!");
      } else {
        toast.error("Please enter your credentials!"); // Correct error toast
        setError("Please enter your credentials!");
      }
    }
  };

  useEffect(() => {
    setError("");
  }, [user]);

  return (
    <>
      <div className="flex items-center justify-center bg-[#a9acaa] h-screen  ">
        <div className="bg-[#ffffff] h-96 w-80 rounded justify-center items-center">
          <h2 className="text-2xl text-center mb-5 mt-4">Signin Page !</h2>
          <div className="flex flex-col  border-black border-solid mr-6 ml-6">
            <label className="mt-2">Email</label>
            <input
              className="border-2 h-9 mt-1"
              type="email"
              value={user.email}
              name="email"
              placeholder=" johnwick@example.com "
              onChange={handleinputchange}
            />
            <label className="mt-2">Password</label>
            <input
              className="border-2 h-9 mt-1"
              type="text"
              value={user.password}
              name="password"
              placeholder=""
              onChange={handleinputchange}
            />
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
            <div className="grid place-items-center mt-4">
              <button
                onClick={handleSignin}
                className="bg-black h-9 text-white w-1/2 rounded hover:bg-[#2c2c2c] active:bg-[#1d1b1c]"
              >
                Sign in
              </button>
              <span className="mt-2">
                Don't have an account ?{" "}
                <Link
                  className="text-blue-700 hover:text-blue-400 active:text-blue-500"
                  to="/signup"
                >
                  SignUp
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
