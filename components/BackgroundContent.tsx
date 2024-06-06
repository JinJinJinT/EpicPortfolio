"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import loading from "../public/loading.gif";
import Head from "next/head"; // Import the Head component

const BackgroundContent = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loading GIF after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {/* <Head>
        <link rel="preload" href="/images/tree.PNG" as="image" />
        <link rel="preload" href="/images/grass.PNG" as="image" />
        <link rel="preload" href="/images/floor.PNG" as="image" />
        <link rel="preload" href="/images/door.PNG" as="image" />
        <link rel="preload" href="/images/tree-dark.PNG" as="image" />
        <link rel="preload" href="/images/grass-dark.PNG" as="image" />
        <link rel="preload" href="/images/floor-dark.PNG" as="image" />
        <link rel="preload" href="/images/door-dark.PNG" as="image" />
      </Head> */}

      {/* <div className="fixed inset-0 flex justify-center items-center">
        <Image
          src="/loading.gif"
          alt="Loading..."
          width={100}
          height={100}
          style={{ display: isLoading ? "block" : "none" }}
          unoptimized
        />
      </div> */}

      <div
        className="relative overflow-hidden mt-7 w-[100vw] transition-opacity ease-in-out duration-700"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        <div className="relative bg-contain bg-no-repeat h-[40vw] right-[4vw] z-[-30] bg-tree-light dark:bg-tree-dark m-0 p-0 opacity-70"></div>
        <div className="relative bg-contain bg-no-repeat h-[42vw] bottom-[40vw] z-[-20] bg-grass-light dark:bg-grass-dark m-0 p-0 opacity-90"></div>
        <div className="relative bg-contain bg-no-repeat h-[42vw] bottom-[67vw] z-[-10] bg-floor-light dark:bg-floor-dark"></div>
        <div className="relative bg-contain bg-no-repeat h-[50vw] bottom-[126vw] left-[88vw] z-[0] bg-door-light dark:bg-door-dark"></div>
      </div>
    </React.Fragment>
  );
};

export default BackgroundContent;
