import { Link } from "react-router-dom";
import styles from "../components/HomePage.module.css";
import Logo from "../components/Logo";
import Description from "../components/BrandsImage";
import BrandsImage from "../components/BrandsImage";
function HomePage() {
  return (
    <div className={styles.backImg}>
      <div className={styles.home}>
        <Logo />
        <h1>فروش آنلاین خودرو های ایرانی</h1>
        <p>
          شامل محصولات شرکت های{" "}
          <strong> سایپا، ایران خودرو و پارس خودرو</strong> می باشد
        </p>
        <Link to="/app">
          <button className={styles.homeBtn}>مشاهده سایت</button>
        </Link>
      </div>
      <BrandsImage />
    </div>
  );
}

export default HomePage;
