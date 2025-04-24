"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flex, Text } from "@radix-ui/themes";

const LandingPage = () => {
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const [showSmoke, setShowSmoke] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSmoke(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateScroll = () => {
      setBackgroundPosition((prev) => prev - 0.5); // Scroll top stripe left
    };

    const interval = setInterval(updateScroll, 16); // Smooth animation ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <Flex className="relative w-full pt-[4.9rem] h-screen bg-retroBlue text-white flex-col overflow-hidden">
      {/* Top half: RetroHacks Logo and Text */}
      <Flex className="z-10 relative flex-col h-full w-full text-center">
        <div
          className="mt-6 z-10 w-full h-4 bg-repeat-x"
          style={{
            backgroundImage:
              "url('/images/retrohacks_images/checkerboard_pattern.png')",
          }}
        />
        {/* Scrolling Background */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-repeat-x opacity-10"
          style={{
            backgroundImage: "url('/images/retrohacks_images/wallpaper.jpg')",
            backgroundPositionX: `${backgroundPosition}px`,
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
              className="relative flex w-full px-8 sm:max-w-[550px] mx-auto z-30"
            />
            <div className="absolute h-3 z-10 bg-retroRed w-full"></div>
            <p className="mt-[-1rem] font-semibold text-lg sm:text-2xl text-retroWhite">
              spring 2025
            </p>
          </div>
          <motion.img
            src="/images/retrohacks_images/retrohacks_signboard.png"
            alt="Signboard"
            whileInView="visible"
            className="absolute bottom-[-2rem] z-20 left-[10%] w-24 sm:w-32 lg:w-48 xl:w-64"
            animate={{
              rotate: [0, -10, 10, -10, 0], // Wobble back and forth
            }}
            transition={{
              duration: 8, // Duration of one full wobble cycle
              repeat: Infinity, // Repeat forever
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <div
          className="w-full z-10 h-4 bg-repeat-x"
          style={{
            backgroundImage:
              "url('/images/retrohacks_images/checkerboard_pattern.png')",
          }}
        />
      </Flex>
      {/* Bottom Half */}
      <Flex
        align="center"
        justify="center"
        className="w-full z-20 relative h-full bg-retroRed"
      >
        <Flex
          justify="center"
          className="z-[40] absolute gap-4 flex-col top-6 sm:top-[calc(50%-5.5rem)] sm:left-[15%] font-bold text-retroWhite"
        >
          <Text className="border-b-2 pb-2 border-retroWhite text-3xl sm:text-5xl">
            EST. 1746
          </Text>
          <a
            href="https://my.hackprinceton.com"
            target="_blank"
            className="text-center bg-retroWhite text-xl sm:text-2xl text-retroRed font-bold px-4 py-2 rounded-xl hover:bg-retroWhite/90 transition-all duration-300"
          >
            •~ Apply Now ~•
          </a>
        </Flex>
        <motion.img
          src="/images/retrohacks_images/retro_car.png"
          alt="Retro Car"
          className="absolute h-[8rem] md:h-auto z-30 bottom-6 sm:bottom-[10%] right-[-10rem] md:right-0 max-h-[110%] w-auto"
          initial={{ x: 550 }}
          animate={{ x: -100 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {showSmoke && (
          <motion.div
            className="absolute z-20 sm:top-0 right-[10%]"
            initial={{ opacity: 100, scale: 5 }}
            animate={{ opacity: 0, scale: 15 }}
            transition={{ duration: 2.8, ease: "easeOut" }}
          >
            <img
              src="/images/retrohacks_images/smoke.webp"
              alt="Smoke Puff"
              className="w-16 sm:w-20 sm:rotate-45"
            />
          </motion.div>
        )}
      </Flex>
    </Flex>
  );
};

export default LandingPage;
