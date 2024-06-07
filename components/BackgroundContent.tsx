"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackgroundContent = ({ isLoading }: { isLoading: boolean }) => {
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

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3.0,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <article className="absolute flex flex-col gap-4 items-center justify-center w-[70vw] left-[10vw] bottom-[145vw] md:bottom-[175vw] z-[50]">
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Portfolio Development In Progress!
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Check Back Soon!
            </div>
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              <a
                href="https://github.com/JinJinJinT/EpicPortfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </article>
        </motion.div>
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
