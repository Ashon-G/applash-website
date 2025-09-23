// components/iphone.tsx
import { Iphone15Pro } from "./ui/iphone-15-pro";

type Scale = "xs" | "sm" | "md" | "lg";

const scaleClasses: Record<Scale, string> = {
  xs: "w-[160px]",
  sm: "w-[220px]",
  md: "w-[280px]",
  lg: "w-[340px]",
};

interface IphoneProps {
  videoSrc?: string;
  imageSrc?: string;
  scale?: Scale;
}

export function Iphone({ videoSrc, imageSrc, scale = "sm" }: IphoneProps) {
  return (
    <div className={`${scaleClasses[scale]} mx-auto`}>
      <Iphone15Pro
        className="w-full h-auto"
        videoSrc={videoSrc}
        src={imageSrc}
      />
    </div>
  );
}
