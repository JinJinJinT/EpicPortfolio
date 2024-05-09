"use client";

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Background from "../app/Background";
import SecretContent from "./SecretContent";

export function AuroraBackgroundDemo() {
  const [loaded, setLoaded] = useState(true);
  const [imageDeleted, setImageDeleted] = useState(true);
  const imageTargetRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const targetNode = imageTargetRef.current;

    // handle mutation events
    const handleDeleteMutation: MutationCallback = mutationsList => {
      for (const mutation of mutationsList) {
        if (mutation.removedNodes.length > 0) {
          const removedNodes = Array.from(mutation.removedNodes);
          for (let node of removedNodes) {
            if (node === targetNode) {
              setImageDeleted(true);
              console.log("Image deleted");
            }
          }
        }
      }
    };
    const observer = new MutationObserver(handleDeleteMutation);

    // configuration of the observer:
    const config = { childList: true, subtree: true };

    // start observing the parent of the target node
    if (targetNode && targetNode.parentNode) {
      observer.observe(targetNode.parentNode, config);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <AuroraBackground>
      {/* {!imageDeleted ? (
        <Background
          loaded={loaded}
          ref={imageTargetRef}
          setLoaded={setLoaded}
        />
      ) : (
        <SecretContent />
      )} */}
      <SecretContent />

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
