import { Link } from "react-router-dom";
import styles from "./BrandsImage.module.css";

function BrandsImage() {
  return (
    // <div className={styles.container}>
    //   <div>
    //     <h3>مرحله اول</h3>
    //     <hr />
    //     <p>تحقیق و بررسی درباره خودروهای موجود و مقایسه آنها</p>
    //   </div>
    //   <div>
    //     <h3>مرحله دوم</h3>
    //     <hr />
    //     <p>انتخاب خودرو و تعیین رنگ و ویژگی های مورد نیاز</p>
    //   </div>
    //   <div>
    //     <h3>مرحله سوم</h3>
    //     <hr />
    //     <p>انتخاب نحوه پرداخت و زمان تحویل</p>
    //   </div>
    // </div>

    <div className={styles.container}>
      <Link>
        <img src="/saipa.jpg" />
      </Link>
      <Link>
        <img src="/iran.jpg" />
      </Link>
      <Link>
        <img src="/pars.jpg" />
      </Link>
    </div>
  );
}

export default BrandsImage;
