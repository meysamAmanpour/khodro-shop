import styles from "./Steps.module.css";
import { Link } from "react-router-dom";
function Steps() {
  return (
    <div>
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          <div className={styles.title}>
            <h3>مرحله اول</h3>
          </div>
          <p>
            جهت بررسی و مقایسه خودروها <Link to="/product">اینجا</Link> کلیک
            کنید وبعد از انتخاب برند مورد نظر ویژگی هر خودرو قابل رویت می باشد
          </p>
        </div>
        <div className={styles.cart}>
          <div className={styles.title}>
            <h3>مرحله دوم</h3>
          </div>
          <p>
            با انتخاب هر خودرو می توانید از مشخصات فنی و ویژگی های آن آگاه شوید
            که موجب تسریع در مراحل انتخاب می باشد.
          </p>
        </div>
        <div className={styles.cart}>
          <div className={styles.title}>
            <h3>مرحله سوم</h3>
          </div>
          <p>
            بعد از انتخاب محصول مورد نظر، نوع رنگ و نحوه پرداخت و زمان تحویل را
            مشخص نمایید.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
