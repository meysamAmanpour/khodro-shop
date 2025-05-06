import { useState } from "react";
import styles from "./Slider.module.css";
const images = [
  "car-0.jpg",
  "car-1.jpg",
  "car-2.jpg",
  "car-3.jpg",
  "car-4.jpg",
];

function Slider() {
  const [index, setIndex] = useState(0);
  function nextSlide() {
    if (index === images.length - 1) {
      setIndex((index) => (index = 0));
    } else {
      setIndex((index) => index + 1);
    }
  }
  function prevSlide() {
    if (index === 0) {
      setIndex((index) => (index = images.length - 1));
    } else {
      setIndex((index) => index - 1);
    }
  }
  return (
    <div className={styles.slider}>
      <img className={styles.sliderItem} src={images[index]} alt={index} />
      <button className={styles.btnLeft} onClick={prevSlide}>
        &larr;
      </button>
      <button className={styles.btnRight} onClick={nextSlide}>
        &rarr;
      </button>
    </div>
  );
}

export default Slider;
