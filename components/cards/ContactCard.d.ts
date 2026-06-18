export interface ContactCardProps {
  /** Built-in filled glyphs: phone | email | location. */
  icon?: "phone" | "email" | "location";
  /** Uppercase label, e.g. "Phone". */
  label: React.ReactNode;
  /** The value line (string or link). */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
