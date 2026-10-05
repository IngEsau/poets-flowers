import styles from "@/app/page.module.css";

type Props = { number: string; name: string };

export default function SectionMarker({ number, name }: Props) {
  return (
    <div className={styles.sectionMarker} aria-hidden="true" data-story-group>
      <span data-story-reveal="fade">{number} / 04</span>
      <span className={styles.markerRule} data-story-reveal="fade" data-story-delay="0.04" />
      <span data-story-reveal="fade" data-story-delay="0.08">{name}</span>
    </div>
  );
}
