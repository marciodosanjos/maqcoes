import React from "react";
import { getTextAlign } from "utils/fonts";



export const Paragraph = ({ textAlign = "left", content, textColor}) => {
  return <p className="max-w-5xl mx-auto" style={{color:textColor, textAlign: textAlign}} dangerouslySetInnerHTML={{__html: content}}/>
};