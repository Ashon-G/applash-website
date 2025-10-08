import Image from "next/image";
import type { CSSProperties } from "react";

const wrapperStyle: CSSProperties = {
  paddingTop: "128px",
  paddingBottom: "128px",
  width: "100%",
  backgroundColor: "rgb(0, 0, 0)",
  color: "rgb(255, 255, 255)",
  fontSize: "17px",
  lineHeight: "24px",
  fontFamily: '"GT Walsheim Pro", sans-serif',
};

const stickyGridStyle: CSSProperties = {
  rowGap: "0px",
  columnGap: "0px",
  gridTemplateRows: "1692.28px",
  gridTemplateColumns: "1214.41px",
  gridAutoColumns: "1fr",
  display: "grid",
  position: "sticky",
  top: "0px",
};

const cardContainerStyle: CSSProperties = {
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
  willChange: "transform",
  transform: "matrix(1, 0, 0, 1, 0, 0)",
  transformStyle: "preserve-3d",
  borderRadius: "16px",
};

const cardContentStyle: CSSProperties = {
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
};

const cardIllustrationStyle: CSSProperties = {
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

const iconWrapperStyle: CSSProperties = {
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  width: "112px",
  height: "112px",
  display: "flex",
};

const iconStyle: CSSProperties = {
  maxWidth: "none",
  width: "179.188px",
  height: "179.188px",
};

const headlineStyle: CSSProperties = {
  fontWeight: 500,
  fontSize: "48px",
  lineHeight: "52.8px",
  letterSpacing: "-1.44px",
  color: "rgb(255, 255, 255)",
};

const secondsGradientStyle: CSSProperties = {
  backgroundImage: "linear-gradient(90deg, rgb(255, 130, 130) 0%, rgb(255, 238, 81) 100%)",
  backgroundClip: "text",
  WebkitTextFillColor: "rgba(0, 0, 0, 0)",
  fontFeatureSettings: '"salt"',
};

const minutesGradientStyle: CSSProperties = {
  backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(255, 255, 255) 100%)",
  backgroundClip: "text",
  WebkitTextFillColor: "rgba(0, 0, 0, 0)",
  fontFeatureSettings: '"salt"',
};

const illustrationImageBase: CSSProperties = {
  maxWidth: "100%",
  position: "absolute",
};

export function OnboardingHighlight() {
  return (
    <div style={wrapperStyle}>
      <div style={stickyGridStyle}>
        <div
          style={{
            ...cardContainerStyle,
            backgroundImage:
              "radial-gradient(circle at 50% 100%, rgba(255, 177, 109, 0.1), rgba(255, 177, 109, 0))",
            border: "1px solid rgb(255, 170, 113)",
          }}
        >
          <div style={cardContentStyle}>
            <div style={iconWrapperStyle}>
              <Image
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5ff0517178effbe43_seconds.webp"
                alt=""
                width={179.188}
                height={179.188}
                style={iconStyle}
              />
            </div>
            <h2 style={headlineStyle}>
              Where onboarding takes{" "}
              <span style={secondsGradientStyle}>seconds</span>.
            </h2>
          </div>
          <div style={cardIllustrationStyle}>
            <Image
              sizes="(max-width: 778px) 100vw, 778px"
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f45fa2f91804ea8607_seconds-figure.webp"
              alt=""
              width={440}
              height={1040}
              style={{
                ...illustrationImageBase,
                objectFit: "contain",
                objectPosition: "50% 0%",
                width: "440px",
                height: "1040px",
                top: "-51.2px",
                right: "51.2px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            ...cardContainerStyle,
            backgroundImage:
              "radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0))",
            border: "1px solid rgb(139, 92, 246)",
          }}
        >
          <div style={cardContentStyle}>
            <div style={iconWrapperStyle}>
              <Image
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5915c7d52da7a2ee9_minutes.webp"
                alt=""
                width={179.188}
                height={179.188}
                style={iconStyle}
              />
            </div>
            <h2 style={headlineStyle}>
              Where training takes{" "}
              <span style={minutesGradientStyle}>minutes</span>.
            </h2>
          </div>
          <div style={cardIllustrationStyle}>
            <Image
              sizes="(max-width: 1219px) 100vw, 1219px"
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5a61e6fb3897c1f63_minutes-brain.webp"
              alt=""
              width={569.828}
              height={498}
              style={{
                maxWidth: "none",
                objectFit: "contain",
                objectPosition: "50% 20%",
                width: "569.828px",
                height: "498px",
                position: "absolute",
                top: "0px",
                right: "0px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            ...cardContainerStyle,
            backgroundImage:
              "radial-gradient(circle at 50% 100%, rgba(217, 70, 239, 0.2), rgba(217, 70, 239, 0))",
            border: "1px solid rgb(217, 70, 239)",
          }}
        >
          <div
            style={{
              ...cardContentStyle,
              gridTemplateRows: "158.391px",
            }}
          >
            <div style={iconWrapperStyle}>
              <Image
                src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b75f5619ca6d57e1d51b0_ms.webp"
                alt=""
                width={179.188}
                height={179.188}
                style={iconStyle}
              />
            </div>
            <h2 style={headlineStyle}>And where tasks are done in milliseconds.</h2>
          </div>
          <div style={cardIllustrationStyle}>
            <Image
              sizes="(max-width: 811px) 100vw, 811px"
              src="https://cdn.prod.website-files.com/661d4f6d81ac1042b721396c/662b93a3dfe9697909d3170a_ms-cards.webp"
              alt=""
              width={455.859}
              height={498}
              style={{
                ...illustrationImageBase,
                objectFit: "contain",
                objectPosition: "50% 50%",
                width: "455.859px",
                height: "498px",
                top: "0px",
                right: "56.9688px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
