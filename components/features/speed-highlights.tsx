import Image from "next/image";
import React, { CSSProperties } from "react";

interface HighlightConfig {
  text: string;
  gradient: string;
}

interface CardContent {
  key: string;
  cardStyle: CSSProperties;
  heading: {
    prefix: string;
    highlight?: HighlightConfig;
    suffix?: string;
  };
  textGridStyle?: CSSProperties;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
    style?: CSSProperties;
  };
  illustration: {
    src: string;
    alt: string;
    sizes?: string;
    containerStyle: CSSProperties;
    imageStyle?: CSSProperties;
  };
}

const containerStyle: CSSProperties = {
  width: "100%",
  backgroundColor: "rgb(0, 0, 0)",
  color: "rgb(255, 255, 255)",
  fontSize: "17px",
  lineHeight: "24px",
  fontFamily: '"GT Walsheim Pro", sans-serif',
  padding: "96px 16px",
  boxSizing: "border-box",
};

const cardsWrapperStyle: CSSProperties = {
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
};

const cardBaseStyle: CSSProperties = {
  columnGap: "0px",
  rowGap: "0px",
  backgroundColor: "rgb(19, 16, 22)",
  gridTemplateRows: "auto",
  gridTemplateColumns: "1fr 1fr",
  gridAutoColumns: "1fr",
  alignContent: "center",
  justifyContent: "space-between",
  alignItems: "center",
  height: "500px",
  maxHeight: "500px",
  marginBottom: "64.1px",
  display: "flex",
  position: "sticky",
  top: "64.0938px",
  overflowX: "hidden",
  overflowY: "hidden",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const textGridBaseStyle: CSSProperties = {
  columnGap: "28px",
  rowGap: "28px",
  flexDirection: "column",
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "auto",
  gridTemplateRows: "112px",
  gridTemplateColumns: "112px 406.562px",
  gridAutoColumns: "1fr",
  alignContent: "center",
  justifyContent: "start",
  alignItems: "center",
  justifyItems: "start",
  width: "642.562px",
  height: "498px",
  display: "grid",
  padding: "48px",
  boxSizing: "border-box",
};

const iconWrapperStyle: CSSProperties = {
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  width: "112px",
  height: "112px",
  display: "flex",
};

const headingStyle: CSSProperties = {
  marginBottom: "0px",
  fontWeight: 500,
  marginTop: "0px",
  fontSize: "48px",
  lineHeight: "52.8px",
  letterSpacing: "-1.44px",
};

const highlightBaseStyle: CSSProperties = {
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFeatureSettings: '"salt"',
  display: "inline-block",
};

const imageColumnBaseStyle: CSSProperties = {
  flexDirection: "column",
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "auto",
  justifyContent: "center",
  alignItems: "center",
  width: "569.828px",
  height: "498px",
  display: "flex",
  position: "relative",
};

const imageContainerBaseStyle: CSSProperties = {
  position: "absolute",
};

const cards: CardContent[] = [
  {
    key: "seconds",
    cardStyle: {
      backgroundImage:
        "radial-gradient(circle at 50% 100%, rgba(255, 177, 109, 0.1), rgba(255, 177, 109, 0))",
      border: "1px solid rgb(255, 170, 113)",
      transform: "matrix(0.8, 0, 0, 0.8, 0, 0)",
      transformStyle: "preserve-3d",
      willChange: "transform",
    },
    heading: {
      prefix: "Where social listening goes live in",
      highlight: {
        text: "seconds",
        gradient: "linear-gradient(90deg, rgb(255, 130, 130) 0%, rgb(255, 238, 81) 100%)",
      },
      suffix: ".",
    },
    icon: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5ff0517178effbe43_seconds.webp",
      alt: "Illustration of a stopwatch",
      width: 179,
      height: 179,
      style: {
        maxWidth: "none",
        width: "179.188px",
        height: "179.188px",
      },
    },
    illustration: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f45fa2f91804ea8607_seconds-figure.webp",
      alt: "Team onboarding dashboard illustration",
      sizes: "(max-width: 778px) 100vw, 778px",
      containerStyle: {
        top: "-51.2px",
        right: "51.2px",
        width: "440px",
        height: "1040px",
      },
      imageStyle: {
        objectFit: "contain",
        objectPosition: "50% 0%",
      },
    },
  },
  {
    key: "minutes",
    cardStyle: {
      backgroundImage:
        "radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0))",
      border: "1px solid rgb(139, 92, 246)",
      transform: "matrix(0.836916, 0, 0, 0.836916, 0, 0)",
      transformStyle: "preserve-3d",
      willChange: "transform",
    },
    heading: {
      prefix: "Where playbooks update in",
      highlight: {
        text: "minutes",
        gradient: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(255, 255, 255) 100%)",
      },
      suffix: ".",
    },
    icon: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5915c7d52da7a2ee9_minutes.webp",
      alt: "Brainstorming illustration",
      width: 179,
      height: 179,
      style: {
        maxWidth: "none",
        width: "179.188px",
        height: "179.188px",
      },
    },
    illustration: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5a61e6fb3897c1f63_minutes-brain.webp",
      alt: "Colorful brain and stopwatch collage",
      sizes: "(max-width: 1219px) 100vw, 1219px",
      containerStyle: {
        top: "0px",
        right: "0px",
        width: "569.828px",
        height: "498px",
      },
      imageStyle: {
        objectFit: "contain",
        objectPosition: "50% 20%",
      },
    },
  },
  {
    key: "milliseconds",
    cardStyle: {
      backgroundImage:
        "radial-gradient(circle at 50% 100%, rgba(217, 70, 239, 0.2), rgba(217, 70, 239, 0))",
      border: "1px solid rgb(217, 70, 239)",
    },
    heading: {
      prefix: "And where follow-ups fire in milliseconds",
      suffix: ".",
    },
    textGridStyle: {
      gridTemplateRows: "158.391px",
    },
    icon: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5619ca6d57e1d51b0_ms.webp",
      alt: "Lightning-fast workflow icon",
      width: 179,
      height: 179,
      style: {
        maxWidth: "none",
        width: "179.188px",
        height: "179.188px",
      },
    },
    illustration: {
      src: "https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b93a3dfe9697909d3170a_ms-cards.webp",
      alt: "Stack of application cards",
      sizes: "(max-width: 811px) 100vw, 811px",
      containerStyle: {
        top: "0px",
        right: "56.9688px",
        width: "455.859px",
        height: "498px",
      },
      imageStyle: {
        objectFit: "contain",
        objectPosition: "50% 50%",
      },
    },
  },
];

export const SpeedHighlights: React.FC = () => {
  return (
    <section style={containerStyle}>
      <div style={cardsWrapperStyle}>
        {cards.map((card) => (
          <div key={card.key} style={{ ...cardBaseStyle, ...card.cardStyle }}>
            <div style={{ ...textGridBaseStyle, ...card.textGridStyle }}>
              <div style={iconWrapperStyle}>
                <Image
                  loading="lazy"
                  src={card.icon.src}
                  alt={card.icon.alt}
                  width={card.icon.width}
                  height={card.icon.height}
                  style={card.icon.style}
                />
              </div>
              <h2 style={headingStyle}>
                {card.heading.prefix}
                {card.heading.highlight ? (
                  <>
                    {" "}
                    <span
                      style={{
                        ...highlightBaseStyle,
                        backgroundImage: card.heading.highlight.gradient,
                      }}
                    >
                      {card.heading.highlight.text}
                    </span>
                  </>
                ) : null}
                {card.heading.suffix}
              </h2>
            </div>
            <div style={imageColumnBaseStyle}>
              <div
                style={{
                  ...imageContainerBaseStyle,
                  ...card.illustration.containerStyle,
                }}
              >
                <Image
                  loading="lazy"
                  src={card.illustration.src}
                  alt={card.illustration.alt}
                  fill
                  sizes={card.illustration.sizes}
                  style={card.illustration.imageStyle}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

