import React, { useState } from "react";
import Image from "next/image";
import background from "../public/landing-background.png";
import loading from "../public/loading.gif";

const Background = () => {
  const [loaded, setLoaded] = useState(false);
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
        className="className=absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out delay-150 duration-1000"
        onLoad={() => {
          // create promise to delay
          setTimeout(() => {
            setLoaded(true);
          }, 2000);
        }}
      />

      <Image
        src={loading}
        alt="background with two affectionate cats and sliding door"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "contain",
          display: loaded ? "none" : "block",
        }}
        className="className=absolute inset-0 h-full w-full object-cover mt-32 ml-10 transition-opacity ease-in-out delay-150 duration-400"
        priority={true}
      />
    </div>
  );
  //   }
};

export default Background;
