import Image from "next/image";
import background from "../public/landing-background.png";

const Background = () => {
  return (
    <Image
      src={background}
      alt="background with two affectionate cats and sliding door"
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "contain",
      }}
      className="className=absolute inset-0 h-full w-full object-cover"
    />
  );
};

export default Background;
