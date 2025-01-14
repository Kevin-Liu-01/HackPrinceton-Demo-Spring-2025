"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flex } from "@radix-ui/themes";
import Checkerboard from "../checkerboard";

const LandingPage = () => {
  const [showSmoke, setShowSmoke] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSmoke(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex className="relative w-full pt-[5.5rem] h-screen bg-retroBlue text-white flex-col overflow-hidden">
      {/* Top half: RetroHacks Logo and Text */}
      <Flex className="relative flex-col h-full w-full text-center">
        <div
          className="mt-6 w-full h-4 bg-repeat-x"
          style={{
            backgroundImage:
              "url('/images/retrohacks_images/checkerboard_pattern.png')",
          }}
        />

        <motion.div
          className="h-[calc(100%-3.5rem)] w-full "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="relative flex-col flex h-full w-full items-center justify-center">
            <img
              src="/images/retrohacks_images/retrohackslogo.png"
              alt="Hack Princeton"
              className="relative flex max-w-[500px] mx-auto z-20"
            />
            <div className="absolute h-3 z-10 bg-retroRed w-full"></div>
            <p className="mt-[-1rem] font-semibold text-lg sm:text-2xl text-retroWhite">
              spring 2025
            </p>
          </div>
        </motion.div>
        <div
          className="w-full h-4 bg-repeat-x"
          style={{
            backgroundImage:
              "url('/images/retrohacks_images/checkerboard_pattern.png')",
          }}
        />
      </Flex>
      {/* Bottom Half */}
      <div className="w-full flex items-center relative h-full bg-retroRed">
        <div className="absolute top-1/2 left-[15%] text-4xl sm:text-5xl font-bold text-retroWhite">
          EST. 1746
        </div>
        <motion.img
          src="/images/retrohacks_images/retro_car.png"
          alt="Retro Car"
          className="absolute z-30 bottom-[10%] right-0 max-h-[110%] w-auto"
          initial={{ x: 550 }}
          animate={{ x: -100 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {showSmoke && (
          <motion.div
            className="absolute z-20 top-0 right-[10%]"
            initial={{ opacity: 100, scale: 5 }}
            animate={{ opacity: 0, scale: 15 }}
            transition={{ duration: 2.8, ease: "easeOut" }}
          >
            <img
              src="/images/retrohacks_images/smoke.webp"
              alt="Smoke Puff"
              className="w-16 sm:w-20 rotate-45"
            />
          </motion.div>
        )}
      </div>
    </Flex>
  );
};

export default LandingPage;