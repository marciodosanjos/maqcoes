export const getTextAlign = (textAlign = "left") => {
  const textAlignMap = {
    left: "textLeft",
    right: "textRight",
    center: "textCenter",
  };

  return `${textAlignMap[textAlign] || ""}`;
};

export const getFontSizeForHeading = (level) => {
  const fontSizeMap = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    1: "text-1xl",
  };
  return `${fontSizeMap[level] || ""}`;
};
