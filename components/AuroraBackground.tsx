"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Background from "../app/Background";

export function AuroraBackgroundDemo() {
  const [loaded, setLoaded] = useState(false);
  const [imageDeleted, setImageDeleted] = useState(false);
  const imageTargetRef = useRef<HTMLImageElement>(null);

  return (
    <AuroraBackground>
      <Background loaded={loaded} setLoaded={setLoaded} />
      {/* {!imageDeleted ? (
        <Background
          loaded={loaded}
          ref={imageTargetRef}
          setLoaded={setLoaded}
        />
      ) : (
        <SecretContent />
      )} */}
      {/* <SecretContent /> */}

      {loaded ? (
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
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
        </motion.div>
      ) : null}
    </AuroraBackground>
  );
}
