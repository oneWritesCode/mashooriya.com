import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
  const headingRefs = useRef([]);
  const buttonRef = useRef(null);

  // helper to add refs
  const addToRefs = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate each heading line
    headingRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: "50vh", },
        {
          y: 0,
          ease: "ease",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "top 80%",
            scrub: true,
          },
        },
      );
    });

    // Animate the button
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        },
      );
    }
  }, []);

  return (
    <div
      id={id}
      className="bg-Yellow text-Dark h-[100%] w-full pt-20 md:h-screen"
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="relative text-center text-[5rem] md:text-[9.5rem] lg:text-[11.5rem]">
          <h1
            ref={addToRefs}
            className="leading-[0.78] font-bold whitespace-nowrap md:whitespace-normal"
          >
            PEOPLE <br />
            BEHIND THE
            <br />
            VIRAL BANGERS
          </h1>

          <div className="relative">
            <div
              ref={buttonRef}
              className="absolute right-0 -bottom-8 -rotate-6 rounded-lg p-2 md:-right-4 md:-bottom-10"
            >
              <div className="bg-Dark/95 text-Yellow transform rounded-lg border-2 px-2 py-1 text-3xl font-bold md:px-2 md:text-2xl lg:text-6xl">
                <span className="flex pt-2">ABOUT US</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
