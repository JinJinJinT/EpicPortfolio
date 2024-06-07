"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "./BackgroundImage";

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
            lightSrc="/images/tree.PNG"
            darkSrc="/images/tree-dark.PNG"
            imageProps={{
              priority: true,
              alt: "cherry blossom tree",
            }}
            updateFunction={setImagesLoaded}
            imageCount={imagesLoaded}
          />
          <BackgroundImage
            className="relative bg-contain bg-no-repeat h-[42vw] bottom-[40vw] z-[-20] m-0 p-0 opacity-90"
            lightSrc="/images/grass.PNG"
            darkSrc="/images/grass-dark.PNG"
            imageProps={{
              priority: true,
              alt: "Beautiful green japanese sand garden with grass and stone lamps",
              onLoad: e => {
                setImagesLoaded(imagesLoaded => imagesLoaded - 1);
              },
            }}
            updateFunction={setImagesLoaded}
            imageCount={imagesLoaded}
          />
          <BackgroundImage
            className="relative bg-contain bg-no-repeat h-[42vw] bottom-[67vw] z-[-10] "
            lightSrc="/images/floor.PNG"
            darkSrc="/images/floor-dark.PNG"
            imageProps={{
              priority: true,
              alt: "wooden floor",
              onLoad: e => {
                setImagesLoaded(imagesLoaded => imagesLoaded - 1);
              },
            }}
            updateFunction={setImagesLoaded}
            imageCount={imagesLoaded}
          />
          <BackgroundImage
            className="relative bg-contain bg-no-repeat h-[15vw] bottom-[123vw] left-[1vw] z-[-30] opacity-60"
            lightSrc="/images/sun.PNG"
            darkSrc="/images/moon.PNG"
            imageProps={{
              priority: true,
              alt: "sun or moon",
              onLoad: e => {
                setImagesLoaded(imagesLoaded => imagesLoaded - 1);
              },
            }}
            updateFunction={setImagesLoaded}
            imageCount={imagesLoaded}
          />
          <BackgroundImage
            className="relative bg-contain bg-no-repeat h-[70vw] bottom-[143.5vw] left-[10vw] z-[0] "
            lightSrc="/images/cars.PNG"
            darkSrc="/images/cars.PNG"
            imageProps={{
              priority: true,
              alt: "two cats cuddling on the floor taking a nap",
              onLoad: e => {
                setImagesLoaded(imagesLoaded => imagesLoaded - 1);
              },
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
