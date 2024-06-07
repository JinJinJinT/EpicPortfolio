import React from "react";
import { getImageProps, ImageProps } from "next/image";

const [WIDTH, HEIGHT] = [3400, 1300];

// omit src, width, height from ImageProps
type ModifiedImageProps = Omit<ImageProps, "src" | "width" | "height">;

interface BackgroundImageProps {
  className?: string;
  lightSrc: string;
  darkSrc: string;
  imageProps: ModifiedImageProps;
  imageCount: number;
  updateFunction: React.Dispatch<React.SetStateAction<number>>;
}

const BackgroundImage = ({
  className,
  lightSrc,
  darkSrc,
  imageProps,
  imageCount,
  updateFunction,
}: BackgroundImageProps) => {
  // create copy of imageProps
  const imagePropsLight: ImageProps = {
    ...imageProps,
    src: lightSrc,
    width: WIDTH,
    height: HEIGHT,
    onLoad: e => {
      updateFunction((imageCount: number) => imageCount - 1);
    },
  };
  const imagePropsDark: ImageProps = {
    ...imageProps,
    src: darkSrc,
    width: WIDTH,
    height: HEIGHT,
    onLoad: e => {
      updateFunction((imageCount: number) => imageCount - 1);
    },
  };
  imagePropsDark.priority = false;

  const lightStyle = getImageSetStyle(imagePropsLight);
  const darkStyle = getImageSetStyle(imagePropsDark);

  return (
    <React.Fragment>
      <div style={lightStyle} className={`light-image ${className}`}></div>
      <div style={darkStyle} className={`dark-image hidden ${className}`}></div>
    </React.Fragment>
  );
};

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

function getImageSetStyle(props: ImageProps) {
  const {
    props: { srcSet },
  } = getImageProps(props);
  const backgroundImage = getBackgroundImage(srcSet);
  return { backgroundImage };
}

export default BackgroundImage;
