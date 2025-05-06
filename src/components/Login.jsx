import styles from "./Login.module.css";
import PageNav from "./PageNav";
function Login() {
  return (
    <div className={styles.overlay}>
      <PageNav />
      <form className={styles.form}>
        <p className={styles.title}>ورود به حساب کاربری</p>
        <div className={styles.input}>
          <label>نام کاربری: </label>
          <input type="text" placeholder="نام کاربری..." />
        </div>

        <div className={styles.input}>
          <label>رمز عبور: </label>
          <input type="password" placeholder="رمز عبور..." />
        </div>
        <div className={styles.divBtn}>
          <button>برگشت</button>
          <button> ثبت نام </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
