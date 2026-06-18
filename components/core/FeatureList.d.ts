export interface FeatureListProps {
  /** List entries. */
  items?: React.ReactNode[];
  /** Optional uppercase eyebrow above the list (e.g. "Key Features"). */
  title?: React.ReactNode;
  /** Default true (designed for navy panels). */
  onDark?: boolean;
  style?: React.CSSProperties;
}
