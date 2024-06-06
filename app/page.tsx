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
          <div className="absolute top-[18px] w-[101vw] h-[50vw] bg-accent dark:bg-neutral z-[-40] opacity-90 left-[-9vw]"></div>
          {/* <div className="absolute top-[18px] w-[101vw] h-[50vw] bg-accent dark:bg-neutral z-0 opacity-90 left-[-9vw]"></div>{" "} */}
          {/* Reduced z-index to go behind the h1 */}
        </div>
      </article>
      <article>
        <BackgroundContent />
      </article>
    </section>
  );
}
