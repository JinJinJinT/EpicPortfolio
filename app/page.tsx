"use client";
import React, { useEffect, useState } from "react";
import PageContent from "@/components/PageContent";
import { motion } from "framer-motion";
import NextImage from "next/image";
import loading from "../public/loading.gif";
import door from "../public/images/door.png";
import doorDark from "../public/images/door-dark.png";
import BackgroundImage from "@/components/BackgroundImage";
import { useNavbarVisibility } from "./NavbarProvider";

const NUMBER_OF_IMAGES = 6;

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(NUMBER_OF_IMAGES);
  const { setIsVisible } = useNavbarVisibility();

  const response = () => {
    setLoading(false);
    document.body.style.overflow = "unset";
    setIsVisible(true);
  };

  useEffect(() => {
    console.log(`Images left: ${imagesLoaded}`);
    let timeoutId: NodeJS.Timeout;
    if (imagesLoaded === 0) {
      timeoutId = setTimeout(() => {
        response();
      }, 2000);

      window.scrollTo(0, 0);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  // make page unscrollable when loading
  // useEffect(() => {
  //   if (!isLoading) {
  //     document.body.style.overflow = "unset";
  //     document.querySelector(".nav")?.classList.toggle("opacity-0");
  //   }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [isLoading]);

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
        className="absolute inset-0"
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
          <BackgroundImage
            className="absolute bg-contain bg-no-repeat bottom-[152vw] h-[110vw] w-[110vw] left-[84vw] z-[-10] "
            lightSrc={door}
            darkSrc={doorDark}
            imageProps={{
              alt: "wooden door",
            }}
            imageCount={imagesLoaded}
            updateFunction={setImagesLoaded}
          />
        </motion.div>
      </div>
    </React.Fragment>
  );
}
