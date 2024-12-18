import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Link to="/signup">
            <ul>Sign Up</ul>
          </Link>
          <Link to="/signin">
            <button className="box-border bg-blue-600 pl-3 pr-5 rounded pt-1 pb-1">
              <ul className="rounded ">Sign In</ul>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
