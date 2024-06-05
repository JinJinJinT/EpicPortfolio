import React from "react";
import Image from "next/image";

import sun from "../public/light/sun.png";
import moon from "../public/dark/moon.png";

//import tree from "../public/light/tree.png";
import darkTree from "../public/dark/tree-dark.png";

import grass from "../public/light/grass.png";
import darkGrass from "../public/dark/grass-dark.png";

import floor from "../public/light/floor.png";
import darkFloor from "../public/dark/floor-dark.png";

const BackgroundContent = () => {
  //   const treeImage = darkModeActive ? tree : darkTree;
  //   const grassImage = darkModeActive ? grass : darkGrass;
  //   const floorImage = darkModeActive ? floor : darkFloor;
  //   const lightSource = darkModeActive ? moon : sun;

  //const treeImage = tree;
  const grassImage = grass;
  const floorImage = floor;
  const lightSource = sun;
  return (
    <div className="relative overflow-hidden mt-7">
      <div className="relative bg-contain bg-no-repeat w-[100vw] h-[40vw] right-[4vw] z-[-30] bg-tree-light dark:bg-tree-dark m-0 p-0 opacity-70"></div>
      <div className="relative bg-contain bg-no-repeat w-[100vw] h-[42vw] bottom-[40vw] z-[-20]  bg-grass-light dark:bg-grass-dark m-0 p-0 opacity-90"></div>
      <div className="relative bg-contain bg-no-repeat w-[100vw] h-[42vw] bottom-[67vw] z-[-10] bg-floor-light dark:bg-floor-dark"></div>
      <div className="relative bg-contain bg-no-repeat w-[100vw] h-[50vw] bottom-[126vw] left-[88vw] z-[0] bg-door-light dark:bg-door-dark"></div>
      {/* <Image
          className="relative z-0 tree"
          src={treeImage}
          alt="cherry blossom tree"
        /> */}
      {/* <div className="bg-tree-light dark:bg-tree-dark"></div> */}
      {/* <Image
          className="relative z-20 garden"
          src={grassImage}
          alt="japanese sand garden with stones, grass,and lightposts"
        />
        <Image
          className="relative z-10 floor"
          src={floorImage}
          alt="wooden floor"
        /> */}
      {/* <Image
          className="absolute min-w-[800px] max-w-full z-20"
          src={grass}
          alt="japanese sand garden with stones, grass,and lightposts"
          width={2000}
        />
        <Image
          className="absolute min-w-[800px] z-10 top-[215px] bottom-0"
          src={floor}
          alt="wooden floor"
        /> */}
    </div>
  );
};

export default BackgroundContent;
