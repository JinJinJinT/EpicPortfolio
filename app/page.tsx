"use client";
import React, { useEffect, useState } from "react";
import PageContent from "@/components/PageContent";
import { motion } from "framer-motion";
import NextImage from "next/image";
import loading from "../public/loading.gif";
import BackgroundImage from "@/components/BackgroundImage";
import { useAppContext } from "./ContextProvider";

export default function Home() {
  // const [isLoading, setLoading] = useState(false);
  const { imagesLeft } = useAppContext();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (imagesLeft === 0) {
      timeoutId = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 2000);

      window.scrollTo(0, 0);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [imagesLeft]);

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: imagesLeft !== 0 ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          display: imagesLeft !== 0 ? "block" : "none",
          // display: "none",
        }}
      >
        <NextImage
          src={loading}
          alt="cute kitten gif covering its eyes over four frames of animation"
          quality={100}
          sizes="0.5vw"
          style={{
            objectFit: "contain",
            height: "100%",
            width: "95%",
            scale: "35%",
          }}
          className="inset-0"
          priority={true}
          unoptimized={true}
        />
      </motion.div>

      <div className="relative border-[1px] border-blue-500 border-blue h-full w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          // whileInView={{ opacity: 1, y: 0 }}
          animate={{
            opacity: imagesLeft !== 0 ? 0 : 1,
            y: imagesLeft !== 0 ? 40 : 0,
          }}
          transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
          className=""
        >
          <PageContent />
          {/* <div className="absolute bg-contain bg-no-repeat h-[90vw] bottom-[270vw] left-[87vw] z-[0] bg-door-light dark:bg-door-dark border border-black"></div> */}
        </motion.div>
      </div>
    </React.Fragment>
  );
}
