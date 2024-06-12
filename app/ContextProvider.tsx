"use client";
import React, { createContext, useState, useContext } from "react";

const NUMBER_OF_IMAGES = 6;

const AppContext = createContext({
  imagesLeft: NUMBER_OF_IMAGES,
  setImagesLeft: (imagesLeft: React.SetStateAction<number>) => {},
});

export function useAppContext() {
  return useContext(AppContext);
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
  // const [isVisible, setIsVisible] = useState(false);
  const [imagesLeft, setImagesLeft] = useState(NUMBER_OF_IMAGES);

  return (
    <AppContext.Provider value={{ imagesLeft, setImagesLeft }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
