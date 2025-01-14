"use client";
import React, { useEffect, useState } from "react";
import MLHBanner from "./mlh";
import Checkerboard from "../checkerboard";

const Navbar = () => {
  const [scrollXTop, setScrollXTop] = useState(0);
  const [scrollXBottom, setScrollXBottom] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      setScrollXTop((prev) => prev - 0.5); // Scroll top stripe left
      setScrollXBottom((prev) => prev + 0.5); // Scroll bottom stripe right
    };

    const interval = setInterval(updateScroll, 16); // Smooth animation ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-retroWhite">
      {/* Top scrolling red stripe */}
      <Checkerboard scrollXTop={scrollXTop} />

      {/* Logo Section */}
      <div className="my-3 flex justify-center items-center h-16 relative">
        <div className="relative h-full">
          <img
            src="/images/logos/hplogo_text.png"
            alt="Hack Princeton"
            className="relative h-full z-20"
          />
          <span className="z-20 absolute top-1/4 right-2 transform -translate-y-1/2 text-retroRed font-bold">
            spring 2025
          </span>
        </div>
        <div className="h-1 z-10 mt-6 bg-retroRed absolute w-full"></div>
      </div>
      <div className="absolute transition-all top-0 right-0 w-full inline">
        <MLHBanner />
      </div>

      {/* Bottom scrolling red stripe */}
      <Checkerboard scrollXTop={scrollXBottom} />
    </nav>
  );
};

export default Navbar;
