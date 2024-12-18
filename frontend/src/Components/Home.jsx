import React from "react";
import Navbar from "./Navbar";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";

const Home = () => {
  return (
    <>
      <Navbar className="z-[100]" />
      <Firstpage />
      <Secondpage />
      <Thirdpage />
    </>
  );
};

export default Home;
