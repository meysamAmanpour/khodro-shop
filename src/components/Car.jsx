import styles from "./Car.module.css";
function Car({ children }) {
  return <div className={styles.position}>{children}</div>;
}
export default Car;
