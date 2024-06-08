"use client";
import React, { createContext, useState, useContext } from "react";

const NavbarVisibilityContext = createContext({
  isVisible: false,
  setIsVisible: (val: boolean) => {},
});

export function useNavbarVisibility() {
  return useContext(NavbarVisibilityContext);
}

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <NavbarVisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavbarVisibilityContext.Provider>
  );
}

export default NavbarVisibilityContext;
