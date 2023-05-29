import SCarousel, { SCarouselItem } from "./SCarousel";
import styles from "./SixmanCarousel.module.css";

export default function SixmanCarousel() {
  return (
    <SCarousel>
      <SCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img1}></div>
        </div>
      </SCarouselItem>
      <SCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img2}></div>
        </div>
      </SCarouselItem>
      <SCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img3}></div>
        </div>
      </SCarouselItem>
      <SCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img4}></div>
        </div>
      </SCarouselItem>
      <SCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img5}></div>
        </div>
      </SCarouselItem>
      <SCarouselItem>
        <div className={styles.imgContainer}>
          <div className={styles.img6}></div>
        </div>
      </SCarouselItem>
    </SCarousel>
  );
}