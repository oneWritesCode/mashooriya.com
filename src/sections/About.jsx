import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutDevsCard from "../components/AboutDevsCard";

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
  const headingRefs = useRef([]);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);

  const devs = [
    {
      name: "Aditya Mishra",
      image: "/About/Aditya_Mishra.png",
      cardClasses:"sm:translate-y-0 translate-y-20",
      bg: "bg-Purple",
      border: "border-Dark",
      cardRotation: "-rotate-3",
      textColor: "text-Dark",
      zIndex: "z-20",
      offsetClasses: "lg:-rotate-2",
    },
    {
      name: "Anmol Dhand",
      image: "/About/Anmol_Dhand.png",
      cardClasses:"sm:translate-x-0 translate-x-20",
      bg: "bg-Green",
      border: "border-Dark",
      cardRotation: "rotate-3",
      textColor: "text-Yellow",
      zIndex: "z-10",
      offsetClasses: "lg:rotate-2",
    },
  ];

  // helper to add refs
  const addToRefs = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Create an overall timeline tied to scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animate each heading line
    headingRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: "50vh", scale: 0.8 },
        {
          y: "-10vh",
          scale: 1,
          ease: "ease",
          scrollTrigger: {
            trigger: el,
            start: "top 170%",
            end: "top 60%",
            scrub: true,
          },
        },
      );
    });

    // Animate the button
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { y: "50vh", scale: 0.8 },
        {
          y: "0vh",
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 160%",
            end: "top 110%",
            scrub: true,
          },
        },
      );
    }

    // Animate the paragraph
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { y: "30vh", opacity: 0 },
        {
          y: "0vh",
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 150%",
            end: "top 60%",
            scrub: true,
          },
        },
      );
    }
  }, []);

  return (
    <div id={id} ref={containerRef} className="relative z-0 w-full">
      <div id={id} className="bg-Yellow text-Dark h-screen w-full py-4 pt-20">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="relative text-center text-[4rem] sm:text-[8rem] md:text-[9.5rem] lg:text-[11.5rem]">
            <h1
              ref={addToRefs}
              className="translate-y-7 leading-[0.78] font-bold whitespace-nowrap md:whitespace-normal"
            >
              PEOPLE <br />
              BEHIND THE <br />
              VIRAL BANGERS
            </h1>

            <div className="relative">
              <div
                ref={buttonRef}
                className="absolute right-0 bottom-10 sm:-bottom-8 -rotate-6 p-2 md:-right-4 md:-bottom-10"
              >
                <div className="bg-Dark/95 text-Yellow transform border-2 px-2 py-1 text-3xl font-bold md:px-2 md:text-2xl lg:text-6xl translate-y-1 sm:-translate-y-20 ">
                  <span className="flex pt-2">ABOUT US</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-Yellow flex md:h-[80vh] h-screen overflow-hidden items-center px-4 pb-12 md:pb-20">
        <div className="mx-auto w-full">
          {/* Team Cards Container */}
          <div className="flex -translate-x-3 flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-center">
            
            {devs.map((dev, index) => (
              <AboutDevsCard key={dev.name} dev={dev} index={index} />
            ))}
          </div>

          {/* Company Description */}
          <div className="mt-12 w-full text-center md:mt-16 lg:mt-20">
            <p
              ref={paragraphRef}
              className="text-Dark mx-auto w-full max-w-7xl px-4 text-2xl leading-[0.8] font-bold md:text-3xl lg:text-4xl"
            >
              MASHOORIYA FUSES MUSIC, CULTURE, AND STRATEGY TO AMPLIFY
              INDEPENDENT VOICES. WE CRAFT CAMPAIGNS THAT FEEL LIKE CULTURE
              ITSELF—DRIVEN BY STREET INSIGHT AND SHARP CREATIVITY SO ARTISTS,
              BRANDS, AND STORIES DON'T JUST APPEAR, THEY RESONATE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
