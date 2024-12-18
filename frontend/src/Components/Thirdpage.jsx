import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Thirdpage = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered animations
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Trigger when the top of the element is in 80% of the viewport
          },
        }
      );

      gsap.fromTo(
        linkRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="font-poppins mt-10 text-[20px] text-center px-4 sm:px-10 lg:px-32"
    >
      <div ref={textRef}>
        <h1 className="font-medium">
          Brands all over the world find URL short essential for their work process.
        </h1>
        <h1 className="font-medium mt-4">
          Shortit helps businesses engage a new audience and increase brand recognition.
        </h1>
      </div>
      <Link to="/about" ref={linkRef}>
        <h1 className="font-semibold p-11 text-red-700 hover:text-red-900 transition duration-300">
          About us
        </h1>
      </Link>
    </div>
  );
};

export default Thirdpage;
