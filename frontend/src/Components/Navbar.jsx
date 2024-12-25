import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "./redux/authSlice.jsx";

const Navbar = () => {
  const { ruser } = useSelector((store) => store.auth);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="flex flex-row justify-between ml-3 mr-5 mt m-3 font-poppins">
        <Link to="/">
          <h2 className="text-2xl font-semibold">
            URL <span className="text-red-600">Shortner</span>{" "}
          </h2>
        </Link>
        <div className="flex space-x-7 text-xl font-medium">
          <Link to="/">
            <ul>Home</ul>
          </Link>
          <Link to="/shorturl">
            <ul>ShortUrl</ul>
          </Link>
          <Link to="/about">
            <ul>About Us</ul>
          </Link>
          <Link to="/contact">
            <ul>Contact Us</ul>
          </Link>
          {ruser ? (
            <div
              className="relative"
              onMouseEnter={()=> setDropdownVisible(true)}
              onMouseLeave={()=> setDropdownVisible(false)}
            >
              <h2 className="bg-blue-600 rounded-full text-xl pl-2 pr-2 text-white">
                {ruser.fullname[0].toUpperCase()}
              </h2>
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                  <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/profile">View Profile</Link>
                    </li>
                    <li
                      className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link to="/signup">
                <ul>Sign Up</ul>
              </Link>
              <Link to="/signin">
                <button className="box-border bg-blue-600 pl-3 pr-5 rounded pt-1 pb-1">
                  <ul className="rounded">Sign In</ul>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
