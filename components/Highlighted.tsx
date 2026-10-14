/** Shared style for `**keyword**` highlights in content strings. */
export const highlightClass = "font-semibold text-primary dark:text-teal-300";

/** Removes `**` markers, e.g. for screen-reader copies of animated text. */
export function stripHighlights(text: string) {
  return text.replaceAll("**", "");
}

/** Renders a string, wrapping each `**keyword**` in a highlight. */
export function Highlighted({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={highlightClass}>
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
