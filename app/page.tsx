import React from "react";
import { AuroraBackgroundDemo } from "../components/AuroraBackground";
import { NavbarDemo } from "../components/NavBar";

export default function Home() {
  return (
    <React.Fragment>
      <NavbarDemo />
      <AuroraBackgroundDemo />
    </React.Fragment>
  );
}
