import styles from "@/app/page.module.css";

type Props = { number: string; name: string };

export default function SectionMarker({ number, name }: Props) {
  return (
    <div className={styles.sectionMarker} aria-hidden="true">
      <span>{number} / 04</span>
      <span className={styles.markerRule} />
      <span>{name}</span>
    </div>
  );
}
