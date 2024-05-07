import React from "react";
import { AuroraBackgroundDemo } from "../components/AuroraBackground";
import loading from "../public/loading.gif";
import Image from "next/image";

export default function Home() {
  return (
    <React.Fragment>
      <AuroraBackgroundDemo />
    </React.Fragment>
  );
}
