"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import tree from "../public/images/tree.png";
import treeDark from "../public/images/tree-dark.png";
import grass from "../public/images/grass.png";
import grassDark from "../public/images/grass-dark.png";
import floor from "../public/images/floor.png";
import floorDark from "../public/images/floor-dark.png";
import sun from "../public/images/sun.png";
import moon from "../public/images/moon.png";
import cars from "../public/images/cars.png";

export interface FlowDownProps {
  isLoading: boolean;
  imagesLoaded: number;
  setImagesLoaded: React.Dispatch<React.SetStateAction<number>>;
}

const BackgroundContent = ({
  isLoading,
  imagesLoaded,
  setImagesLoaded,
}: FlowDownProps) => {
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
          <BackgroundImage
            className="relative bg-contain bg-no-repeat h-[40vw] right-[4vw] z-[-30] m-0 p-0 opacity-70"
            lightSrc={tree}
            darkSrc={treeDark}
            imageProps={{
              alt: "cherry blossom tree",
            }}
            updateFunction={setImagesLoaded}
            imageCount={imagesLoaded}
          />
          <BackgroundImage
            className="relative bg-contain bg-no-repeat h-[42vw] bottom-[40vw] z-[-20] m-0 p-0 opacity-90"
            lightSrc={grass}
            darkSrc={grassDark}
            imageProps={{
              alt: "Beautiful green japanese sand garden with grass and stone lamps",
            }}
            updateFunction={setImagesLoaded}
            imageCount={imagesLoaded}
          />
          <BackgroundImage
            className="relative bg-contain bg-no-repeat h-[42vw] bottom-[67vw] z-[-10] "
            lightSrc={floor}
            darkSrc={floorDark}
            imageProps={{
              alt: "wooden floor",
            }}
            updateFunction={setImagesLoaded}
            imageCount={imagesLoaded}
          />
          <BackgroundImage
            className="relative bg-contain bg-no-repeat h-[15vw] bottom-[123vw] left-[1vw] z-[-30] opacity-60"
            lightSrc={sun}
            darkSrc={moon}
            imageProps={{
              alt: "sun or moon",
              objectFit: "contain",
            }}
            updateFunction={setImagesLoaded}
            imageCount={imagesLoaded}
          />
          <BackgroundImage
            className="relative bg-contain bg-no-repeat h-[70vw] bottom-[143.5vw] left-[10vw] z-[0] "
            lightSrc={cars}
            darkSrc={cars}
            imageProps={{
              alt: "two cats cuddling on the floor taking a nap",
            }}
            updateFunction={setImagesLoaded}
            imageCount={imagesLoaded}
          />
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
            <div className="text-3xl md:text-7xl font-bold text-secondary dark:text-primary text-center">
              Portfolio Development In Progress!
            </div>
            <div className="font-extralight text-secondary md:text-4xl dark:text-primary py-4">
              Check Back Soon!
            </div>
            <button className="bg-secondary dark:bg-primary rounded-full w-fit text-primary dark:text-secondary px-4 py-2">
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
      {/* <div className="invisible bg-tree-dark toDelete"></div>
      <div className="invisible bg-grass-dark toDelete"></div>
      <div className="invisible bg-floor-dark toDelete"></div>
      <div className="invisible bg-door-dark toDelete"></div>
      <div className="invisible bg-moon toDelete"></div> */}
      {/* </div> */}
    </React.Fragment>
  );
};

export default BackgroundContent;
