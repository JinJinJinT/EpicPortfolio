"use client";
import React from "react";
import { getImageProps } from "next/image";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map(str => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

function getImageSetStyle(src: string) {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: 128,
    height: 128,
    src: src,
  });
  const backgroundImage = getBackgroundImage(srcSet);
  return { backgroundImage };
}

export default function Home() {
  const sunStyle = getImageSetStyle("/images/sun.PNG");
  const moonStyle = getImageSetStyle("/images/moon.PNG");
  return (
    <React.Fragment>
      <div
        style={moonStyle}
        className="dark-image relative bg-no-repeat border border-black bg-contain w-[100vw] h-[15vw] hidden"
      ></div>
      <div
        style={sunStyle}
        className="light-image relative bg-no-repeat border border-black bg-contain w-[100vw] h-[15vw]"
      ></div>
    </React.Fragment>
  );
}
