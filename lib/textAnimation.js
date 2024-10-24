"use client";

import { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";

export const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export function useTextAnimation(fullText, delay = 150, enterIndex) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        if (index === enterIndex) {
          setText("");
        }
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [index, fullText, delay]);

  return { text, index, isComplete: index >= fullText.length };
}
