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
        width={35}
        height={35}
        className="h-6 w-6"
      />
    </Link>
  );
};
