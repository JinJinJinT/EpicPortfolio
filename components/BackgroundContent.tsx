"use client";
import React from "react";
import Image from "next/image";
import loading from "../public/loading.gif";

const BackgroundContent = () => {
  return (
    <React.Fragment>
      <div className="relative overflow-hidden mt-7 w-[100vw] transition-opacity ease-in-out duration-700">
        <div className="relative bg-contain bg-no-repeat h-[40vw] right-[4vw] z-[-30] bg-tree-light dark:bg-tree-dark m-0 p-0 opacity-70"></div>
        <div className="relative bg-contain bg-no-repeat h-[42vw] bottom-[40vw] z-[-20]  bg-grass-light dark:bg-grass-dark m-0 p-0 opacity-90"></div>
        <div className="relative bg-contain bg-no-repeat h-[42vw] bottom-[67vw] z-[-10] bg-floor-light dark:bg-floor-dark"></div>
        <div className="relative bg-contain bg-no-repeat h-[50vw] bottom-[126vw] left-[88vw] z-[0] bg-door-light dark:bg-door-dark"></div>
      </div>
    </React.Fragment>
  );
};

export default BackgroundContent;
