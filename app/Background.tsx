import React, { useState } from "react";
import Image from "next/image";
import background from "../public/landing-background.png";
import loading from "../public/loading.gif";

interface Props {
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
}

const Background = ({ loaded, setLoaded }: Props) => {
  return (
    <div>
      <Image
        src={background}
        alt="background with two affectionate cats and sliding door"
        quality={100}
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: "contain",
          opacity: loaded ? 1 : 0,
        }}
        className="inset-0 h-full w-full object-cover transition-opacity ease-in-out delay-150 duration-1000"
        onLoad={() => {
          // create promise to delay
          setTimeout(() => {
            setLoaded(true);
          }, 500);
        }}
      />

      <Image
        src={loading}
        alt="background with two affectionate cats and sliding door"
        quality={100}
        sizes="0.5vw"
        style={{
          objectFit: "contain",
          display: loaded ? "none" : "block",
          height: "100%",
          width: "95%",
          scale: "35%",
        }}
        className="absolute inset-0 transition-opacity ease-in-outp duration-700"
        priority={true}
      />
    </div>
  );
};

export default Background;
