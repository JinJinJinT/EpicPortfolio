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

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    sizes: "100vw",
    src: "/images/grass.PNG",
    width: 124,
    height: 124,
  });
  const backgroundImage = getBackgroundImage(srcSet);
  console.log(backgroundImage);
  const style = { height: "20vw", width: "80vw", backgroundImage };

  return (
    <div
      className="absolute border border-black bg-contain z-[50] bg-no-repeat left-[10vw] bottom-[10vw]"
      style={style}
    >
      hi
    </div>
  );
}
