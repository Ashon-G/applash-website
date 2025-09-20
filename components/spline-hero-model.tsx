"use client";

import Spline from "@splinetool/react-spline/next";

export const SplineHeroModel = () => {
  return (
    <div className="relative h-full w-full">
      <Spline
        className="!h-full !w-full"
        scene="https://prod.spline.design/DZy1C8zBQNLWNuin/scene.splinecode"
      />
    </div>
  );
};
