"use client";
import React, { useState } from "react";
import Image from "next/image";
import closed from "../public/door-closed.png";
import open from "../public/door-open.png";

const SecretContent = () => {
  const [isHovered, setIsHovered] = useState(false);
  function mouseEnter() {
    console.log("mouse enter");
    setIsHovered(true);
  }

  function mouseLeave() {
    console.log("mouse leave");
    setIsHovered(false);
  }

  return (
    <div
      className="p-3 m-5 border border-black"
      onMouseEnter={() => mouseEnter}
      onMouseLeave={() => mouseLeave}
    >
      <h1>Hover over the door</h1>
      {/* {isHovered ? (
        <Image src={closed} alt="secret cottage door closed" width={150} />
      ) : (
        <Image src={open} alt="secret cottage door open" width={150} />
      )} */}
    </div>
  );
};

export default SecretContent;
