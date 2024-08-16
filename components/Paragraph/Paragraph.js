import React from "react";
import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteURls } from "utils/relativeToAbsoluteUrls";



export const Paragraph = ({ textAlign = "left", content, textColor}) => {
  return <p className="max-w-5xl mx-auto" style={{color:textColor, textAlign: textAlign}} dangerouslySetInnerHTML={{__html: relativeToAbsoluteURls(content)}}/>
};