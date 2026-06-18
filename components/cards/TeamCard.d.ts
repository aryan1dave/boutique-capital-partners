export interface TeamCardProps {
  /** Headshot URL (square-ish PNG, rendered radius 8px). */
  image: string;
  name: React.ReactNode;
  /** Coral link under the name; null/"" hides it. Default "View bio". */
  linkLabel?: string;
  onClick?: () => void;
  /** md = 130px grid photo, lg = 180px founder photo. */
  size?: "md" | "lg";
  style?: React.CSSProperties;
}
