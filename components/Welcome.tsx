import React from "react";
import BackgroundImage from "./BackgroundImage";
import door from "../public/images/door.png";
import doorDark from "../public/images/door-dark.png";
import tree from "../public/images/tree.png";
import treeDark from "../public/images/tree-dark.png";
import grass from "../public/images/grass.png";
import grassDark from "../public/images/grass-dark.png";
import floor from "../public/images/floor.png";
import floorDark from "../public/images/floor-dark.png";
import sun from "../public/images/sun.png";
import moon from "../public/images/moon.png";
import cars from "../public/images/cars.png";

const Welcome = () => {
  return (
    <section className="relative w-full border border-red-800 m-1 ">
      <article className="relative  m-5 h-full w-full">
        <div className="relative ml-7 mt-8">
          <h1
            className="relative text-6xl font-bold text-primary dark:text-secondary strokeme tracking-wider"
            data-text="JIN"
          >
            JIN
          </h1>
          <h1
            className="text-6xl font-bold text-primary dark:text-secondary strokeme-fixed tracking-wider"
            data-text="TERADA WHITE"
          >
            TERADA WHITE
          </h1>
          <h1 className="absolute text-2xl italic tracking-wider font-normal dark:text-primary">
            software engineer
          </h1>
        </div>
      </article>
      <div className="absolute top-[168px] w-[100vw] h-[65vw] bg-accent dark:bg-neutral z-[-35] opacity-90 left-[-9vw]"></div>
      <article className="relative top-[-20vw] border border-black">
        <BackgroundImage
          className="relative bg-contain bg-no-repeat z-[-10] h-[100vw] left-[85vw] top-[-20vw]"
          lightSrc={door}
          darkSrc={doorDark}
          imageProps={{
            alt: "wooden door",
          }}
        />
        <BackgroundImage
          className="absolute bg-contain bg-no-repeat z-[-25] h-[37vw] bottom-[28vw]"
          lightSrc={grass}
          darkSrc={grassDark}
          imageProps={{
            alt: "Beautiful green japanese sand garden with grass and stone lamps",
          }}
        />
        <BackgroundImage
          className="absolute bg-contain bg-no-repeat z-[-20] bottom-[13vw]"
          lightSrc={floor}
          darkSrc={floorDark}
          imageProps={{
            alt: "wooden floor",
          }}
        />
        <BackgroundImage
          className="absolute bg-contain bg-no-repeat z-[-30] right-[10vw] bottom-[28vw]  opacity-70"
          lightSrc={tree}
          darkSrc={treeDark}
          imageProps={{
            alt: "cherry blossom tree",
          }}
        />
        <BackgroundImage
          className="absolute bg-contain bg-no-repeat h-[18vw] bottom-[57vw] z-[-31] opacity-60"
          lightSrc={sun}
          darkSrc={moon}
          imageProps={{
            alt: "sun or moon",
          }}
        />

        <BackgroundImage
          className="absolute bg-contain bg-no-repeat h-[60vw] bottom-[5vw] left-[15vw] z-[-20] "
          lightSrc={cars}
          darkSrc={cars}
          imageProps={{
            alt: "two cats cuddling on the floor taking a nap",
          }}
        />
      </article>

      {
        /* <article>
          <div className="ml-7 mt-8">
            <h1
              className="text-6xl font-bold text-primary dark:text-secondary strokeme tracking-wider"
              data-text="JIN"
            >
              JIN
            </h1>
            <h1
              className="text-6xl font-bold text-primary dark:text-secondary strokeme-fixed tracking-wider"
              data-text="TERADA WHITE"
            >
              TERADA WHITE
            </h1>
          </div>
          <div className="relative ml-7">
            {/* Changed to relative to position children absolutely with respect to this container */
        //}
        // <h1 className="absolute text-2xl italic tracking-wider font-extralight dark:text-primary z-[-35]">
        //   software engineer
        // </h1>
        // {/* this one is blue dark (neutral) *///}
        // <div className="absolute top-[18px] w-[101vw] h-[50vw] bg-accent dark:bg-neutral z-[-40] opacity-90 left-[-9vw]"></div>
        //</section>{/* <div className="absolute top-[18px] w-[101vw] h-[50vw] bg-accent dark:bg-neutral z-0 opacity-90 left-[-9vw]"></div>{" "} */}
        //{/* Reduced z-index to go behind the h1 */}
        //   </div>
        // </article> */}}
      }
      {/*<article>
         <BackgroundContent
            isLoading={isLoading}
            imagesLoaded={imagesLoaded}
            setImagesLoaded={setImagesLoaded}
          />
      </article>*/}
    </section>
  );
};

export default Welcome;
