"use client";
import React from "react";
import { AuroraBackgroundDemo } from "../components/AuroraBackground";
import loading from "../public/loading.gif";
import Image from "next/image";
import BackgroundContent from "@/components/BackgroundContent";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <section>
      <article>
        <div className="ml-7 mt-8">
          <h1 className="text-6xl font-bold text-primary dark:text-secondary strokeme tracking-wider">
            JIN<br></br>TERADA WHITE
          </h1>
        </div>
        <div className="relative ml-7">
          {" "}
          {/* Changed to relative to position children absolutely with respect to this container */}
          <h1 className="absolute text-2xl italic tracking-wider font-extralight dark:text-primary z-[-35]">
            software engineer
          </h1>
          {/* this one is blue dark (neutral) */}
          <div className="absolute top-[18px] w-[101vw] h-[50vw] bg-accent dark:bg-neutral z-[-40] opacity-90 left-[-9vw]"></div>{" "}
          {/* <div className="absolute top-[18px] w-[101vw] h-[50vw] bg-accent dark:bg-neutral z-0 opacity-90 left-[-9vw]"></div>{" "} */}
          {/* Reduced z-index to go behind the h1 */}
        </div>
      </article>
      <article>
        <BackgroundContent />
      </article>
      {/* <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      > */}
      {/* <article className="relative flex flex-col gap-4 items-center justify-center px-4 bottom-[155vw]">
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
      </article> */}
      {/* </motion.div> */}
    </section>
  );
}
