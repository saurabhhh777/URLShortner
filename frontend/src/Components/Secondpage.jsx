import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Secondpage = () => {
  const statsRef = useRef(null);
  const trustedRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered animations
    const ctx = gsap.context(() => {
      // Animate statistics section
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%", // Start animation when the section is in the viewport
          },
        }
      );

      // Animate trusted brands section
      gsap.fromTo(
        trustedRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: trustedRef.current,
            start: "top 80%",
          },
        }
      );
    });

    // Cleanup on component unmount
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="h-screen font-poppins mt-0">
      <div
        ref={statsRef}
        className="flex flex-row justify-between p-28 bg-[#eae7dc] rounded"
      >
        <div className="text-8xl font-bold">13m</div>
        <div className="text-8xl font-bold">100k</div>
        <div className="font-medium">
          <h1 className="font-bold">We process 13,000,000 redirects per day</h1>
          <h1>
            <span className="font-bold">for 100,000 customers.</span> It's our
            goal
          </h1>
          <h1>to provide reliable service allowing</h1>
          <h1>businesses to focus on their priorities.</h1>
        </div>
      </div>
      <div>
        <div className="box-border pt-28 justify-center justify-items-center">
          <h2 className="text-7xl font-poppins font-bold">
            Trusted worldwide by
          </h2>
        </div>
        <div ref={trustedRef}>
          <div className="flex flex-row box-border font-poppins text-center justify-items-center pt-12 pl-36 pr-36 justify-between">
            <h1 className="text-6xl">Product Hunt</h1>
            <h1 className="text-6xl">Panasonic</h1>
            <h1 className="text-6xl">IKEA</h1>
          </div>
          <div className="flex flex-row text-center  justify-between pt-10 pl-60 pr-60">
            <h1 className="text-6xl">ECOSIA</h1>
            <h1 className="text-6xl">Respberry Pi</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondpage;
