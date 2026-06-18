/**
 * BCP button.
 * @startingPoint section="Components" subtitle="Coral primary, outline-on-navy, cream and text-CTA buttons" viewport="700x340"
 */
export interface ButtonProps {
  /** Visual treatment. primary = solid coral; outline = coral border on navy; cream = cream fill w/ coral text (use on teal/photos); tertiary = muted cream fill w/ navy text (use inside cream cards); text = coral text-CTA. */
  variant?: "primary" | "outline" | "cream" | "tertiary" | "text";
  /** sm 10×18 / md 14×28 / lg 16×36 padding. */
  size?: "sm" | "md" | "lg";
  /** Append the sliding → arrow (signature CTA affordance). */
  arrow?: boolean;
  /** Renders an <a> when set. */
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
