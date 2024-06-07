"use client";
import React, { useEffect, useState } from "react";
import PageContent from "@/components/PageContent";
import { motion } from "framer-motion";
import NextImage from "next/image";
import loading from "../public/loading.gif";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const startTime = Date.now();

    // URLs of the images you want to preload
    const imageUrls = [
      "/images/tree.PNG",
      // "/images/tree-dark.PNG",
      "/images/grass.PNG",
      // "/images/grass-dark.PNG",
      "/images/floor.PNG",
      // "/images/floor-dark.PNG",
      "/images/sun.PNG",
      // "/images/moon.PNG",
      "/images/cars.PNG",
      // "/images/cars-dark.png",
      "/images/door.PNG",
      // "images/door-dark.PNG",
    ];

    // Create a promise for each image to load
    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img.src);
        img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
      });
    };

    let timeoutId: NodeJS.Timeout;

    // Promise.all to wait for all images to load
    Promise.all(imageUrls.map(url => loadImage(url)))
      .then(() => {
        // const toDelete = document.querySelectorAll(".toDelete");
        // toDelete.forEach(div => {
        //   div.remove();
        // });

        const endTime = Date.now();
        const timeDiff = endTime - startTime;

        // create delay if timeDiff < 2000
        if (timeDiff < 2000) {
          const delay = 2000 - timeDiff;
          timeoutId = setTimeout(() => {
            setLoading(false);
            window.scrollTo(0, 0);
          }, delay);
        } else {
          setLoading(false);
        }
      })
      .catch(error => console.error("Error loading images:", error));

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

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
          <NavBar />
          <PageContent isLoading={isLoading} />
          {/* <div className="absolute bg-contain bg-no-repeat h-[90vw] bottom-[270vw] left-[87vw] z-[0] bg-door-light dark:bg-door-dark border border-black"></div> */}
          <div className="absolute bg-contain bg-no-repeat bottom-[130vw] h-[110vw] w-[110vw] left-[84vw] z-[-10] bg-door-light dark:bg-door-dark"></div>
        </motion.div>
      </div>
    </React.Fragment>
  );
}
