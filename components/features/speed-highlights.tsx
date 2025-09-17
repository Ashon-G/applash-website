import Image from "next/image";
import type { CSSProperties } from "react";

type HighlightCopy = {
  text: string;
  gradient: string;
};

type SpeedCard = {
  key: string;
  accent: string;
  background: string;
  transform?: string;
  stickyTop?: string;
  textRows?: string;
  heading: {
    prefix: string;
    highlight?: HighlightCopy;
    suffix?: string;
  };
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  figure: {
    src: string;
    alt: string;
    sizes?: string;
    container: CSSProperties;
    imageStyle?: CSSProperties;
  };
};

const SPEED_CARDS: SpeedCard[] = [
  {
    key: "seconds",
    accent: "rgb(255, 170, 113)",
    background:
      "radial-gradient(circle at 50% 100%, rgba(255, 177, 109, 0.1), rgba(255, 177, 109, 0))",
    transform: "matrix(0.8, 0, 0, 0.8, 0, 0)",
    heading: {
      prefix: "Where onboarding takes",
      highlight: {
        text: "seconds",
        gradient:
          "linear-gradient(90deg, rgb(255, 130, 130) 0%, rgb(255, 238, 81) 100%)",
      },
      suffix: ".",
    },
    icon: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5ff0517178effbe43_seconds.webp",
      alt: "Stopwatch illustration highlighting speedy onboarding",
      width: 179,
      height: 179,
    },
    figure: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f45fa2f91804ea8607_seconds-figure.webp",
      alt: "Dashboard illustration showing onboarding progress",
      sizes: "(max-width: 778px) 100vw, 778px",
      container: {
        top: "-51.2px",
        right: "51.2px",
        width: "440px",
        height: "1040px",
      },
      imageStyle: {
        objectPosition: "50% 0%",
      },
    },
  },
  {
    key: "minutes",
    accent: "rgb(139, 92, 246)",
    background:
      "radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0))",
    transform: "matrix(0.836916, 0, 0, 0.836916, 0, 0)",
    heading: {
      prefix: "Where training takes",
      highlight: {
        text: "minutes",
        gradient:
          "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(255, 255, 255) 100%)",
      },
      suffix: ".",
    },
    icon: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5915c7d52da7a2ee9_minutes.webp",
      alt: "Brainstorming icon representing collaborative training",
      width: 179,
      height: 179,
    },
    figure: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5a61e6fb3897c1f63_minutes-brain.webp",
      alt: "Colorful collage illustrating rapid training",
      sizes: "(max-width: 1219px) 100vw, 1219px",
      container: {
        top: "0px",
        right: "0px",
        width: "569.828px",
        height: "498px",
      },
      imageStyle: {
        objectPosition: "50% 20%",
      },
    },
  },
  {
    key: "milliseconds",
    accent: "rgb(217, 70, 239)",
    background:
      "radial-gradient(circle at 50% 100%, rgba(217, 70, 239, 0.2), rgba(217, 70, 239, 0))",
    heading: {
      prefix: "And where tasks are done in milliseconds",
      suffix: ".",
    },
    textRows: "158.391px",
    icon: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5619ca6d57e1d51b0_ms.webp",
      alt: "Lightning fast workflow badge",
      width: 179,
      height: 179,
    },
    figure: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b93a3dfe9697909d3170a_ms-cards.webp",
      alt: "Stack of interface cards completing tasks instantly",
      sizes: "(max-width: 811px) 100vw, 811px",
      container: {
        top: "0px",
        right: "56.9688px",
        width: "455.859px",
        height: "498px",
      },
      imageStyle: {
        objectPosition: "50% 50%",
      },
    },
  },
];

export function SpeedHighlights() {
  return (
    <section
      className="relative isolate overflow-hidden bg-black px-4 py-24 text-white antialiased sm:px-6 lg:px-8"
      style={{
        fontFamily: '"GT Walsheim Pro", sans-serif',
        fontSize: "17px",
        lineHeight: "24px",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        {SPEED_CARDS.map((card) => (
          <article
            key={card.key}
            className="sticky isolate flex h-[500px] max-h-[500px] w-full flex-col overflow-hidden rounded-2xl border px-12 py-12 text-left sm:flex-row sm:items-center sm:justify-between"
            style={{
              backgroundColor: "rgb(19, 16, 22)",
              backgroundImage: card.background,
              borderColor: card.accent,
              top: card.stickyTop ?? "64.0938px",
              transform: card.transform,
              transformStyle: card.transform ? "preserve-3d" : undefined,
              willChange: card.transform ? "transform" : undefined,
            }}
          >
            <div
              className="grid h-full w-full items-center gap-7 sm:w-[642.562px]"
              style={{
                gridTemplateColumns: "112px minmax(0, 1fr)",
                gridTemplateRows: card.textRows ?? "112px",
              }}
            >
              <div className="flex h-[112px] w-[112px] items-center justify-center">
                <Image
                  loading="lazy"
                  src={card.icon.src}
                  alt={card.icon.alt}
                  width={card.icon.width}
                  height={card.icon.height}
                  className="h-[179.188px] w-[179.188px] max-w-none object-contain"
                />
              </div>
              <h2 className="m-0 text-[48px] font-medium leading-[52.8px] tracking-[-1.44px] text-white">
                {card.heading.prefix}
                {card.heading.highlight ? (
                  <>
                    {" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage: card.heading.highlight.gradient,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFeatureSettings: '"salt"',
                      }}
                    >
                      {card.heading.highlight.text}
                    </span>
                  </>
                ) : null}
                {card.heading.suffix}
              </h2>
            </div>

            <div className="relative flex h-[498px] w-full items-center justify-center sm:w-[569.828px]">
              <div
                className="absolute"
                style={{
                  ...card.figure.container,
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    loading="lazy"
                    src={card.figure.src}
                    alt={card.figure.alt}
                    fill
                    sizes={card.figure.sizes}
                    className="object-contain"
                    style={card.figure.imageStyle}
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
