export interface SectionHeadingProps {
  /** The heading text — sentence case, often a question ("What do we offer?"). */
  title: React.ReactNode;
  /** Optional lead paragraph under the title. */
  lead?: React.ReactNode;
  /** White text for navy/teal sections. */
  onDark?: boolean;
  /** md 32px / lg 42px (default) / xl 50px. */
  size?: "md" | "lg" | "xl";
  align?: "center" | "left";
  style?: React.CSSProperties;
}
