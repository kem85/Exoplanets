import { Html, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useBtnBubbleEffect } from "../../../hooks.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { history } from "../../main.jsx";
import { string } from "three/webgpu";
//git commit -S -m "scroll animations in homepage and added the content of the homepage"
function HomePageContent() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const NextBtn = useRef(null);
  const {
    isResetting,
    btnTranslateX,
    btnTranslateY,
    textTranslateX,
    textTranslateY,
  } = useBtnBubbleEffect(NextBtn);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);

  // Create Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef1.current) {
              setVisible1(true);
            } else if (entry.target === contentRef2.current) {
              setVisible2(true);
            } else if (entry.target === contentRef3.current) {
              setVisible3(true);
            } else if (entry.target === NextBtn.current) {
              setVisible4(true);
            }
          } else {
            if (entry.target === contentRef1.current) {
              setVisible1(false);
            } else if (entry.target === contentRef2.current) {
              setVisible2(false);
            } else if (entry.target === contentRef3.current) {
              setVisible3(false);
            } else if (entry.target === NextBtn.current) {
              setVisible4(false);
            }
          }
        });
      },
      { threshold: 0.2 }
    ); // Adjust threshold for visibility trigger

    if (contentRef1.current) {
      observer.observe(contentRef1.current);
    }
    if (contentRef2.current) {
      observer.observe(contentRef2.current);
    }
    if (contentRef3.current) {
      observer.observe(contentRef3.current);
    }
    if (NextBtn.current) {
      observer.observe(NextBtn.current);
    }
    // Clean up observer on component unmount
    return () => {
      if (contentRef1.current) observer.unobserve(contentRef1.current);
      if (contentRef2.current) observer.unobserve(contentRef2.current);
      if (contentRef3.current) observer.unobserve(contentRef3.current);
      if (NextBtn.current) observer.unobserve(NextBtn.current);
    };
  }, []);

  return (
    <div className="divvv">
      {/* First Content Div */}
      <div
        ref={contentRef1}
        className="bg-primary-orange text-background-cream w-[28rem] rounded-lg px-6 py-4 absolute top-[100vh] left-[8vw] text-[1.5rem] z-10 transition-opacity duration-500"
        style={{
          opacity: visible1 ? 1 : 0, // Fade in when visible
        }}
      >
        <h1 className="pb-4 text-center">Kepler-186f</h1>
        <p className="py-2 text-light-green font-bold">
          Exploring the Mysteries of Kepler-186f: The First Earth-sized
          Exoplanet in the Habitable Zone
        </p>
        <p style={{ fontSize: "1.25rem" }}>
          In the vast expanse of our universe, where countless stars twinkle
          like distant diamonds, the search for other worlds has unveiled some
          astonishing discoveries. Among them, Kepler-186f stands out as a
          beacon of hope in the quest for extraterrestrial life. Discovered by
          NASA's Kepler Space Telescope in 2014, this intriguing exoplanet
          orbits a star much like our own sun, but its significance goes beyond
          mere similarities.
        </p>
      </div>

      {/* Second Content Div */}
      <div
        ref={contentRef2}
        className="bg-primary-orange text-background-cream w-[28rem] rounded-lg px-6 py-4 absolute top-[175vh] left-[70vw] text-[1.5rem] font-bold  z-10 transition-opacity duration-500"
        style={{
          opacity: visible2 ? 1 : 0, // Fade in when visible
        }}
      >
        <p style={{ fontSize: "1.25rem" }}>
          What makes Kepler-186f particularly fascinating is its position within
          the habitable zone—the region around a star where conditions might be
          just right for liquid water to exist. With a radius 1.1 times that of
          Earth, Kepler-186f tantalizes scientists with the prospect of
          Earth-like environments, possibly harboring the building blocks of
          life as we know it. As we delve deeper into the characteristics of
          this distant planet, we uncover not just its geological and
          atmospheric features, but also the profound implications it holds for
          our understanding of life beyond our solar system.
        </p>
      </div>
      <div
        ref={contentRef3}
        className="bg-primary-orange text-background-cream font-bold w-[28rem] rounded-lg px-6 py-4 absolute top-[225vh] left-[8vw] text-[1.5rem] z-10 transition-opacity duration-500"
        style={{
          opacity: visible3 ? 1 : 0, // Fade in when visible
        }}
      >
        <p style={{ fontSize: "1.25rem" }}>
          Join us on a journey as we explore the captivating world of
          Kepler-186f, unraveling the secrets it may hold and contemplating the
          endless possibilities that lie within the cosmos. What does it mean
          for humanity if we find life on a distant planet? As we gaze into the
          stars, Kepler-186f invites us to ponder our place in the universe and
          fuels our imagination for future explorations.
        </p>
      </div>
      <motion.button
        onClick={() => {
          history.push("Method1");
        }}
        className="absolute h-[8rem] rounded-full w-[8rem] font-bold cursor-pointer outline-none bg-primary-orange text-background-cream top-[280vh] left-[85vw] text-[1.5rem] z-10 transition-opacity duration-500 flex items-center justify-center"
        ref={NextBtn}
        style={{
          opacity: visible4 ? 1 : 0, // Fade in when visible
        }}
        animate={
          isResetting ? { x: 0, y: 0 } : { x: btnTranslateX, y: btnTranslateY }
        }
        transition={
          isResetting
            ? { type: "spring", stiffness: 500, damping: 10 }
            : { duration: 0 }
        }
      >
        <motion.span
          animate={
            isResetting
              ? { x: 0, y: 0 }
              : { x: textTranslateX, y: textTranslateY }
          }
          transition={
            isResetting
              ? { type: "spring", stiffness: 500, damping: 10 }
              : { duration: 0 }
          }
        >
          Next
        </motion.span>
      </motion.button>
    </div>
  );
}

export default HomePageContent;
