import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleinputchange = (e) => {
    const { name, value } = e.target;
    setUser((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const responce = await axios.post(
        "http://localhost:7000/api/v1/user/signup",
        user
      );

      console.log(responce);

      if (responce.data.success) {
        navigate("/signin");
        toast.success(responce.data.message); // Success toast
      } else {
        setError(responce.data.message);
        toast.error(responce.data.message); // Error toast
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        setError(error.response.data.message || "Please enter data!");
        toast.error(error.response.data.message || "Please enter data!"); // Error toast
      } else {
        setError("Please enter your credentials!");
        toast.error("Please enter your credentials!"); // Error toast
      }
    }
  };

  useEffect(() => {
    setError("");
  }, [user]);

  return (
    <>
      <div className="flex items-center justify-center bg-[#a9acaa] h-screen">
        <div className="bg-[#ffffff] h-96 w-80 rounded justify-center items-center">
          <h2 className="text-2xl text-center mb-5 mt-4">Signup Page !</h2>
          <div className="flex flex-col  border-black border-solid mr-6 ml-6">
            <label className="text-black ">Full Name</label>
            <input
              className="border-2 h-9 mt-1"
              type="fullname"
              value={user.fullname}
              name="fullname"
              onChange={handleinputchange}
              placeholder=" John Wick"
            />
            <label className="mt-2">Email</label>
            <input
              className="border-2 h-9 mt-1"
              type="email"
              value={user.email}
              name="email"
              onChange={handleinputchange}
              placeholder=" johnwick@example.com "
            />
            <label className="mt-2">Password</label>
            <input
              className="border-2 h-9 mt-1"
              type="text"
              value={user.password}
              name="password"
              onChange={handleinputchange}
              placeholder=""
            />
            {error && <p className="text-red-500 m-4">{error}</p>}
            <div className="grid place-items-center mt-3">
              <button
                onClick={handleSignup}
                className="bg-black h-9 text-white w-1/2 rounded hover:bg-[#2c2c2c] active:bg-[#1d1b1c]"
              >
                Sign Up
              </button>
              <span>Alredy have an account ?<Link className="text-blue-700 hover:text-blue-400 active:text-blue-500" to="/signin">Login</Link></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
