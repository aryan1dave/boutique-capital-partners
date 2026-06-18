export interface TagProps {
  /** pill = rounded category chip (cream bg, navy text); eyebrow = tiny uppercase letterspaced label. */
  variant?: "pill" | "eyebrow";
  /** navy (default) | coral | muted (eyebrow on dark only). */
  color?: "navy" | "coral" | "muted";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
