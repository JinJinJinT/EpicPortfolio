import React, { useRef } from "react";
import Image, { getImageProps, ImageProps, StaticImageData } from "next/image";
import { handleClientScriptLoad } from "next/script";

const [WIDTH, HEIGHT] = [3400, 1300];

// omit src, width, height from ImageProps
type ModifiedImageProps = Omit<ImageProps, "src">;

interface BackgroundImageProps {
  className?: string;
  lightSrc: StaticImageData;
  darkSrc: StaticImageData;
  imageProps: ModifiedImageProps;
  imageCount: number;
  updateFunction: React.Dispatch<React.SetStateAction<number>>;
}

const handleLoad = (
  ref: React.RefObject<HTMLImageElement>,
  imageCount: number,
  updateFunction: React.Dispatch<React.SetStateAction<number>>
) => {
  //   console.log("Image loaded");
  if (ref.current) {
    //     const { naturalWidth, naturalHeight } = ref.current;
    //     // set width and height
    //     // ref.current.width = naturalWidth;
    //     // ref.current.height = naturalHeight;
    //     console.log(`Image loaded: ${imageCount}`);
    //     console.log(`width: ${naturalWidth}, height: ${naturalHeight}`);
    // set image count
    if (ref.current.classList.contains("light-image")) {
      updateFunction((imageCount: number) => imageCount - 1);
    }
  }
};

const BackgroundImage = ({
  className,
  lightSrc,
  darkSrc,
  imageProps,
  imageCount,
  updateFunction,
}: BackgroundImageProps) => {
  const lightImageRef = useRef<HTMLImageElement>(null);
  const darkImageRef = useRef<HTMLImageElement>(null);

  // create copy of imageProps
  const imagePropsLight: ImageProps = {
    ...imageProps,
    src: lightSrc,
    style: {
      width: "auto",
    },
    priority: true,
    onLoad: () => handleLoad(lightImageRef, imageCount, updateFunction),
  };
  const imagePropsDark: ImageProps = {
    ...imageProps,
    style: {
      width: "auto",
    },
    src: darkSrc,
    priority: true,
    onLoad: () => handleLoad(darkImageRef, imageCount, updateFunction),
  };

  //   const lightStyle = getImageSetStyle(imagePropsLight);
  //   const darkStyle = getImageSetStyle(imagePropsDark);

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

// function getBackgroundImage(srcSet = "") {
//   const imageSet = srcSet
//     .split(", ")
//     .map(str => {
//       const [url, dpi] = str.split(" ");
//       return `url("${url}") ${dpi}`;
//     })
//     .join(", ");
//   return `image-set(${imageSet})`;
// }

// function getImageSetStyle(props: ImageProps) {
//   const {
//     props: { srcSet },
//   } = getImageProps(props);
//   const backgroundImage = getBackgroundImage(srcSet);
//   return { backgroundImage };
// }

export default BackgroundImage;
