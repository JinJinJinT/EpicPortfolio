import React from "react";
import Image from "next/image";

import sun from "../public/light/sun.png";
import moon from "../public/dark/moon.png";

import tree from "../public/light/tree.png";
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

  const treeImage = tree;
  const grassImage = grass;
  const floorImage = floor;
  const lightSource = sun;
  return (
    <div className="relative h-30">
      <div className="flex relative">
        <Image
          className="relative z-0 tree"
          src={treeImage}
          alt="cherry blossom tree"
        />
        <Image
          className="relative z-20 garden"
          src={grassImage}
          alt="japanese sand garden with stones, grass,and lightposts"
        />
        <Image
          className="relative z-10 floor"
          src={floorImage}
          alt="wooden floor"
        />
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
    </div>
  );
};

export default BackgroundContent;
