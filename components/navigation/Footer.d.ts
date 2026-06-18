export interface FooterProps {
  /** Cream-on-navy logo path; default expects page at project root. */
  logoSrc?: string;
  /** Small link row entries. */
  links?: { label: string; href?: string }[];
  style?: React.CSSProperties;
}
