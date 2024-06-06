"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BackgroundContent = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loading GIF after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // delete all divs with class "toDelete"
      const toDelete = document.querySelectorAll(".toDelete");
      toDelete.forEach(div => {
        div.remove();
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.0,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <div
          className="relative mt-7 w-[100vw] transition-opacity ease-in-out duration-700"
          style={{ visibility: isLoading ? "hidden" : "visible" }}
        >
          <div className="relative bg-contain bg-no-repeat h-[40vw] right-[4vw] z-[-30] bg-tree-light dark:bg-tree-dark m-0 p-0 opacity-70"></div>
          <div className="relative bg-contain bg-no-repeat h-[42vw] bottom-[40vw] z-[-20] bg-grass-light dark:bg-grass-dark m-0 p-0 opacity-90"></div>
          <div className="relative bg-contain bg-no-repeat h-[42vw] bottom-[67vw] z-[-10] bg-floor-light dark:bg-floor-dark"></div>
          <div className="relative bg-contain bg-no-repeat h-[15vw] bottom-[123vw] left-[1vw] z-[-30] bg-sun dark:bg-moon opacity-60"></div>
          <div className="relative bg-contain bg-no-repeat h-[70vw] bottom-[143.5vw] left-[10vw] z-[0] bg-cars"></div>
        </div>
      </motion.div>

      {/* Only here to preload the dark mode images and gets deleted later */}
      {/* <div className="overflow-hidden h-0 w-0"> */}
      <div className="invisible bg-tree-dark toDelete"></div>
      <div className="invisible bg-grass-dark toDelete"></div>
      <div className="invisible bg-floor-dark toDelete"></div>
      <div className="invisible bg-door-dark toDelete"></div>
      <div className="invisible bg-moon toDelete"></div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default BackgroundContent;
