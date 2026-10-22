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
  estimatedPrice: number;
  sizes: string;
  delay: number;
  labels: Dictionary["collection"];
};

export default function CollectionProduct({ className, image, alt, name, estimatedPrice, sizes, delay, labels }: Props) {
  const priceLabel = `$${estimatedPrice} MXN`;
  const inquiry = `${contact.whatsapp}?text=${encodeURIComponent(labels.inquiry.replace("{name}", name))}`;
  return (
    <article className={className} data-story-reveal="collage" data-story-photo data-story-delay={delay} data-story-product>
      <a className={styles.productVisual} href={inquiry} target="_blank" rel="noopener noreferrer"
        aria-label={`${labels.view} ${name}. ${labels.estimate}: ${priceLabel}. ${labels.request}.`}>
        <Image src={image} alt={alt} fill sizes={sizes} data-story-product-photo />
      </a>
      <div className={styles.collectionProductInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <span className={styles.collectionPrice} aria-label={`${labels.estimate}: ${priceLabel}`}>
          ${estimatedPrice} <span>MXN</span>
        </span>
        <a className={styles.productInquiry} href={inquiry} target="_blank" rel="noopener noreferrer" aria-label={`${labels.request}: ${name}`}>
          {labels.request} <ArrowRightIcon size="1.2em" aria-hidden="true" data-story-product-arrow />
        </a>
      </div>
    </article>
  );
}
