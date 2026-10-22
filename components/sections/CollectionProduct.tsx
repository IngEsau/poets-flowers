import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";
import { contact } from "@/lib/contact";
import type { Dictionary } from "@/lib/i18n";
import styles from "@/app/page.module.css";

type Props = {
  className: string;
  image: string;
  alt: string;
  name: string;
  description?: string;
  price?: string;
  sizes: string;
  delay: number;
  labels: Dictionary["collection"];
};

export default function CollectionProduct({ className, image, alt, name, description, price, sizes, delay, labels }: Props) {
  const priceLabel = price ?? labels.byQuotation;
  return (
    <details className={className} data-story-reveal="collage" data-story-photo data-story-delay={delay} data-story-product>
      <summary className={styles.productSummary} aria-label={`${labels.view} ${name}, ${priceLabel}`}>
        <Image src={image} alt={alt} fill sizes={sizes} data-story-product-photo />
        <span className={styles.collectionProductInfo} data-story-product-info>
          <span><span className={styles.productName}>{name} <ArrowRightIcon size="1em" aria-hidden="true" data-story-product-arrow /></span>{description && <span className={styles.productDescription}>{description}</span>}</span>
          <span className={styles.collectionPrice}>{priceLabel}</span>
        </span>
      </summary>
      <a className={styles.productInquiry} href={`${contact.whatsapp}?text=${encodeURIComponent(labels.inquiry.replace("{name}", name))}`} target="_blank" rel="noopener noreferrer">{labels.request} <ArrowRightIcon size="1em" aria-hidden="true" /></a>
    </details>
  );
}
