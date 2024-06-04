import React from "react";
import { AuroraBackgroundDemo } from "../components/AuroraBackground";
import loading from "../public/loading.gif";
import Image from "next/image";
import BackgroundContent from "@/components/BackgroundContent";

export default function Home() {
  return (
    <section>
      <article>
        <div className="ml-7 mt-8">
          <h1 className="text-6xl font-bold text-primary dark:text-secondary strokeme tracking-wider">
            JIN<br></br>TERADA WHITE
          </h1>
          <h1 className="text-2xl italic tracking-wider font-extralight dark:text-primary">
            software engineer
          </h1>
        </div>
      </article>
      <article>
        <BackgroundContent />
      </article>
    </section>
  );
}
