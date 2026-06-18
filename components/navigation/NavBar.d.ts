/**
 * Site header.
 * @startingPoint section="Components" subtitle="Sticky white header with navy Montserrat menu + teal-hover dropdown" viewport="1280x180"
 */
export interface NavBarProps {
  /** Logo image path; default the navy/teal BCP logo. */
  logoSrc?: string;
  /** Menu items; entries with `children` render a hover dropdown. */
  items?: { label: string; href?: string; children?: { label: string; href?: string }[] }[];
  /** position: sticky (default true). */
  sticky?: boolean;
  style?: React.CSSProperties;
}
