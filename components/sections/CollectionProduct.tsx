import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";
import { contact } from "@/lib/contact";
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
};

export default function CollectionProduct({ className, image, alt, name, description, price = "By quotation", sizes, delay }: Props) {
  return (
    <details className={className} data-story-reveal="collage" data-story-photo data-story-delay={delay} data-story-product>
      <summary className={styles.productSummary} aria-label={`View ${name}, ${price}`}>
        <Image src={image} alt={alt} fill sizes={sizes} data-story-product-photo />
        <span className={styles.collectionProductInfo} data-story-product-info>
          <span><span className={styles.productName}>{name} <ArrowRightIcon size="1em" aria-hidden="true" data-story-product-arrow /></span>{description && <span className={styles.productDescription}>{description}</span>}</span>
          <span className={styles.collectionPrice}>{price}</span>
        </span>
      </summary>
      <a className={styles.productInquiry} href={`${contact.whatsapp}?text=${encodeURIComponent(`Hello! I would like a quote for ${name}.`)}`} target="_blank" rel="noopener noreferrer">Request a quote <ArrowRightIcon size="1em" aria-hidden="true" /></a>
    </details>
  );
}
