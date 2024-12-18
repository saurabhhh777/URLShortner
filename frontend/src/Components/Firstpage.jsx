import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Firstpage = () => {
  const navigate = useNavigate();

  // Refs for text animation
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  const handleStartforfree = () => {
    navigate("/shorturl");
  };

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );


    //subtile animation
    gsap.fromTo(
      subTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
    );
  }, []);

  return (
    <>
      <div className="flex w-full">
        <div className="h-screen w-1/2 box-border pt-32 p-28">
          <div>
            <div
              ref={titleRef}
              className="box-border pb-10 font-poppins font-semibold"
            >
              <h1 className="text-7xl">
                Shorten <span className="text-red-900">links</span>
              </h1>
              <h1 className="text-7xl">using your</h1>
              <h1 className="text-7xl">
                <span className="text-red-900">own</span> domain.
              </h1>
            </div>
            <div ref={subTitleRef} className="text-xl font-poppins">
              <h2 className="box-border pb-2 font-medium">
                Shorten, personalize, and share
              </h2>
              <h2 className="box-border pb-2 font-medium">
                fully branded short URLs.
              </h2>
              <button
                onClick={handleStartforfree}
                className="bg-slate-800 text-white p-2 font-semibold"
              >
                START FOR FREE
              </button>
            </div>
          </div>
        </div>
        <div className="h-screen w-1/2 justify-center justify-items-center items-center text-center">
          <img src="../assets/second.png" alt="url-img" />
        </div>
      </div>
    </>
  );
};

export default Firstpage;
