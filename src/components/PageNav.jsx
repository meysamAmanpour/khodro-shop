import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.link}>
          <NavLink to="/Login" className={styles.link}>
            ورود
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/aboutus" className={styles.link}>
            درباره ما
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/product" className={styles.link}>
            محصولات
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/app" className={styles.link}>
            صفحه اصلی
          </NavLink>
        </li>
      </ul>
      <h1 className={styles.title}> KHODRO SHOP </h1>
      <Logo />
    </nav>
  );
}

export default PageNav;
