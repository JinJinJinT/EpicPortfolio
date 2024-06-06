"use client";
import { NavBar } from "@/components/NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import loading from "../public/loading.gif";

const FadeInWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loading GIF after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // delete all divs with class "toDelete"
      const toDelete = document.querySelectorAll(".toDelete");
      toDelete.forEach(div => {
        div.remove();
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <Image
        src={loading}
        alt="background with two affectionate cats and sliding door"
        quality={100}
        sizes="0.5vw"
        style={{
          objectFit: "contain",
          display: isLoading ? "block" : "none",
          height: "100%",
          width: "95%",
          scale: "35%",
        }}
        className="absolute inset-0 transition-opacity ease-in-outp duration-1000"
        priority={true}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.0, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <NavBar />
        <main>{children}</main>{" "}
        <div className="relative bg-contain bg-no-repeat h-[100vw] bottom-[232vw] left-[87vw] z-[0] bg-door-light dark:bg-door-dark"></div>
      </motion.div>
    </React.Fragment>
  );
};

export default FadeInWrapper;
