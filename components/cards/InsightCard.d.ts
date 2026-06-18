/**
 * Insight / article card.
 * @startingPoint section="Components" subtitle="White article card with image, category pill and coral CTA" viewport="420x560"
 */
export interface InsightCardProps {
  /** Cover image URL (260px tall, cover-fit). Omit for text-only card. */
  image?: string;
  /** e.g. "Q4 2025" or "Dec 2025" — renders coral, bold, small. */
  date?: string;
  /** Category pill text, e.g. "Market Commentary". */
  category?: string;
  title: React.ReactNode;
  excerpt?: React.ReactNode;
  /** CTA label, default "Read article". */
  cta?: string;
  href?: string;
  style?: React.CSSProperties;
}
