"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { highlightClass, stripHighlights } from "@/components/Highlighted";

function Word({
  children,
  progress,
  range,
  highlight,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className={highlight ? highlightClass : undefined}>
      {children}
    </motion.span>
  );
}

/** Splits text into words, flagging the ones inside `**…**` highlights. */
function toWords(text: string) {
  const words: { word: string; highlight: boolean }[] = [];
  text.split("**").forEach((part, i) => {
    for (const word of part.split(" ")) {
      if (word) words.push({ word, highlight: i % 2 === 1 });
    }
  });
  return words;
}

/**
 * Paragraph whose words "light up" one after another as you scroll through it.
 * Wrap keywords in `**…**` to highlight them.
 */
export function ScrollWords({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.55"],
  });

  const words = toWords(text);
  if (reduced) {
    return (
      <span ref={ref}>
        {words.map(({ word, highlight }, i) => (
          <span key={i} className={highlight ? highlightClass : undefined}>
            {i < words.length - 1 ? `${word} ` : word}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={ref}>
      <span className="sr-only">{stripHighlights(text)}</span>
      <span aria-hidden>
        {words.map(({ word, highlight }, i) => {
          const start = i / words.length;
          const end = Math.min(1, start + 1.5 / words.length);
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]} highlight={highlight}>
              {i < words.length - 1 ? `${word} ` : word}
            </Word>
          );
        })}
      </span>
    </span>
  );
}
