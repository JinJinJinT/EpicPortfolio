"use client";
import { NavBar } from "@/components/NavBar";
import React, { useState } from "react";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [darkModeActive, setDarkModeActive] = useState(true);
  return (
    <React.Fragment>
      {/* <NavBar setDarkModeActive={setDarkModeActive} /> */}
      <main>
        {React.Children.map(children, child =>
          React.cloneElement(child as React.ReactElement, {
            darkModeActive,
          })
        )}
      </main>
    </React.Fragment>
  );
};

export default ThemeWrapper;
