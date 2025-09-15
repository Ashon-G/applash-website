import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image
        src="/logo-applash.png"
        alt="Applash logo"
        width={1024}
        height={247}
        className="h-8 w-auto"
      />
    </Link>
  );
};
