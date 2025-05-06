// import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "../components/Applayout.module.css";
import Steps from "../components/Steps";
import Slider from "../components/Slider";
function Applayout() {
  return (
    <div className={styles.applayout}>
      <PageNav />
      <Slider />
      <Steps />
    </div>
  );
}

export default Applayout;
