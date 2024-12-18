import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="pl-20 pr-20 mt-16 text-[20px]">
          <div className="font-poppins font-semibold text-4xl mt-8 mb-5">
            About Us
          </div>
          <div className="flex flex-row font-poppins ">
            Welcome to url short . com, your go-to destination for quick,
            reliable, and efficient URL shortening! We understand the importance
            of simplicity and speed in today’s fast-paced digital world. Long
            URLs can be inconvenient, hard to share, and difficult to remember.
            That’s why we created a platform that transforms those lengthy links
            into short, manageable URLs—without compromising functionality.
          </div>
          <div className="font-poppins font-medium text-4xl mt-10 mb-2">
            Who We Are
          </div>
          <div className="mb-3">
            We are a team of passionate developers and tech enthusiasts
            dedicated to making the web more user-friendly. Our mission is to
            help individuals, businesses, and organizations share their links
            effortlessly while maintaining security and reliability.
          </div>

          <div className="font-poppins font-medium text-3xl mb-3">
            What We Offer
          </div>
          <div className="text-[20px] mb-3">
            <ul>
              <li>Fast Link Shortening: Create short URLs in seconds.</li>
              <li>
                Custom URLs: Personalize your links for better branding and
                recognition.
              </li>
              <li>
                Analytics: Gain insights into how your links are performing with
                detailed click tracking.
              </li>
              <li>
                Reliability: Our service is built to handle high traffic with
                speed and efficiency.
              </li>
            </ul>
          </div>
          <div className="font-poppins font-medium text-3xl mb-3">
            Why Choose Us?
          </div>
          <div>
            At [Your Website Name], we prioritize your experience. Whether
            you're a marketer, a business owner, or simply someone who loves
            sharing links, our platform is designed to cater to your needs. With
            an intuitive interface and robust features, we make sharing links
            easier than ever.
          </div>

          <div className="font-poppins font-medium text-3xl mb-3  mt-4">
            Our Vision
          </div>
          <div className="pb-32">
            We aim to be more than just a URL shortener. Our goal is to empower
            users with tools that enhance how they interact online, bridging
            gaps and simplifying connections. Thank you for choosing [Your
            Website Name]. Together, let's keep the web short, sweet, and
            simple!
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
