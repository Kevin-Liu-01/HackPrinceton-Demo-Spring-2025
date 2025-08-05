"use client";
import { Box, Flex } from "@radix-ui/themes";
// import { MatrixRainingLetters } from "react-mdr";
import { BookMarkedIcon } from "lucide-react";

const Resources = () => {
  return (
    <Flex
      id="resources"
      gap="4"
      align="center"
      className="relative flex-col font-averia text-white h-full overflow-clip w-full bg-coffeeWhite"
    >
      <Flex
        direction="column"
        justify="center"
        className="px-4 py-12 z-10 max-w-6xl mx-auto"
      >
        <Flex
          direction="column"
          align="center"
          className="mb-8 text-3xl sm:text-5xl text-coffeeGreen font-extrabold gap-4"
        >
          <span className="bg-coffeeWhite font-extrabold w-min whitespace-nowrap text-sm border-2 border-coffeeGreen rounded-lg p-2">
            ADDITIONAL INFO
          </span>
          <p>RESOURCES</p>
        </Flex>

        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          className="p-4 bg-coffeeGreen/70 border border-coffeeGreen backdrop-filter hover:scale-[1.01] transition-all backdrop-blur-sm rounded-3xl"
        >
          <Flex align="center" gap="4" className="text-2xl font-semibold">
            <Box className="border rounded-xl p-2 bg-coffeeGreen text-coffeeWhite border-coffeeGreen">
              {" "}
              <BookMarkedIcon size={24} />{" "}
            </Box>
            <span>MLH Code of Conduct</span>
          </Flex>
          <p className="mt-2">
            {`Please refer to MLH's Code of Conduct for all other standards on how
            to build an inclusive hacking environment.`}
          </p>
        </a>
        <a
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          className="p-2 mt-8 py-4 bg-gray-100 border border-coffeeGreen backdrop-filter hover:scale-[1.01] transition-all backdrop-blur-sm rounded-3xl"
        >
          <iframe
            src="https://docs.google.com/forms/d/1BmTVgzZ3VOOTxjGCQ2iXg4SOQmzF6VFaVE8bPtX0peg/viewform?edit_requested=true"
            className="w-full min-h-[447px]"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </a>
      </Flex>
    </Flex>
  );
};

export default Resources;
