"use client";

import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

/**
 * A floating phone mockup that matches the Applash brand.
 * The component is exported directly so it can be used throughout the site
 * without the wrapper example that originally shipped with the component.
 */
const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-gradient-to-tr from-violet-600 to-indigo-600"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white/80 border-l-white/20 border-t-white/20 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <span className="mb-10 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent">
        Applash
      </span>

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border border-violet-600 bg-gradient-to-r from-violet-600 to-indigo-600 py-2 text-sm font-medium text-white backdrop-blur">
        Start Converting
      </button>

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600" />
    </div>
  );
};

export default FloatingPhone;