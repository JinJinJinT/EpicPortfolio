import React, { useRef } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useAppContext } from "@/app/ContextProvider";

// omit src, width, height from ImageProps
type ModifiedImageProps = Omit<ImageProps, "src">;

interface BackgroundImageProps {
  className?: string;
  lightSrc: StaticImageData;
  darkSrc: StaticImageData;
  imageProps: ModifiedImageProps;
}

const handleLoad = (
  ref: React.RefObject<HTMLImageElement>,
  imagesLeft: number,
  updateFunction: React.Dispatch<React.SetStateAction<number>>
  // Update the type of updateFunction parameter
) => {
  //   console.log("Image loaded");
  if (ref.current) {
    if (ref.current.classList.contains("light-image")) {
      if (imagesLeft === 1) {
        setTimeout(() => {
          updateFunction((imageCount: number) =>
            imageCount <= 0 ? 0 : imageCount - 1
          );
        }, 2000);
      } else {
        updateFunction((imageCount: number) => imageCount - 1);
      }
    }
  }
};

const BackgroundImage = ({
  className,
  lightSrc,
  darkSrc,
  imageProps,
}: BackgroundImageProps) => {
  const lightImageRef = useRef<HTMLImageElement>(null);
  const darkImageRef = useRef<HTMLImageElement>(null);

  const { imagesLeft, setImagesLeft } = useAppContext();

  // create copy of imageProps
  const imagePropsLight: ImageProps = {
    ...imageProps,
    src: lightSrc,
    style: {
      width: "auto",
    },
    priority: true,
    onLoad: () => handleLoad(lightImageRef, imagesLeft, setImagesLeft),
  };
  const imagePropsDark: ImageProps = {
    ...imageProps,
    style: {
      width: "auto",
    },
    src: darkSrc,
    priority: true,
    onLoad: () => handleLoad(darkImageRef, imagesLeft, setImagesLeft),
  };

  return (
    <React.Fragment>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...imagePropsLight}
        className={`light-image ${className}`}
        ref={lightImageRef}
      />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        {...imagePropsDark}
        className={`dark-image hidden ${className}`}
        ref={darkImageRef}
      />
      {/* <div style={lightStyle} className={`light-image ${className}`}></div> */}
      {/* <div style={darkStyle} className={`dark-image hidden ${className}`}></div> */}
    </React.Fragment>
  );
};

export default BackgroundImage;
