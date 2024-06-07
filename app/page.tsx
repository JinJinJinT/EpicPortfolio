"use client";
import React, { useEffect, useState } from "react";
import PageContent from "@/components/PageContent";
import { motion } from "framer-motion";
import NextImage from "next/image";
import loading from "../public/loading.gif";

const NUMBER_OF_IMAGES = 5;

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(NUMBER_OF_IMAGES);

  //const startTime: number = Date.now();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(`Images left: ${imagesLoaded}`);
    // let timeoutId: NodeJS.Timeout;
    if (imagesLoaded === 0) {
      //   const endTime = Date.now();
      //   const timeDiff = endTime - startTime;

      //   // create delay if timeDiff < 2000
      //   if (timeDiff < 2000) {
      //     const delay = 2000 - timeDiff;
      //     timeoutId = setTimeout(() => {
      //       setLoading(false);
      //     }, delay);
      //   } else {
      setLoading(false);
      //   }
      window.scrollTo(0, 0);
    }
    // return () => {
    //   if (timeoutId) clearTimeout(timeoutId);
    // };
  }, [imagesLoaded]);

  // make page unscrollable when loading
  useEffect(() => {
    if (isLoading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
        className="absolute inset-0 transition-opacity ease-in-outp duration-1000"
        style={{
          display: isLoading ? "block" : "none",
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

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          // whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 40 : 0 }}
          transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
          className=""
        >
          <PageContent
            isLoading={isLoading}
            imagesLoaded={imagesLoaded}
            setImagesLoaded={setImagesLoaded}
          />
          {/* <div className="absolute bg-contain bg-no-repeat h-[90vw] bottom-[270vw] left-[87vw] z-[0] bg-door-light dark:bg-door-dark border border-black"></div> */}
          <div className="absolute bg-contain bg-no-repeat bottom-[130vw] h-[110vw] w-[110vw] left-[84vw] z-[-10] bg-door-light dark:bg-door-dark"></div>
        </motion.div>
      </div>
    </React.Fragment>
  );
}
