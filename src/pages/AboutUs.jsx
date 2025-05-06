import styles from "../components/AboutUs.module.css";
import PageNav from "../components/PageNav";
function AboutUs() {
  return (
    <>
      <PageNav />
      <div className={styles.aboutus}>
        <h1>سایت فروش خودرو های ایرانی</h1>
        <h3 className={styles.text}>
          مسیری هموار و مطمئن برای انتخابی شایسته و برتر
        </h3>
        <p className={styles.text}>
          شرکت آنلاین فروش خودروهای ایرانی با ضمانت شرکتی
          <strong> hkodroshop</strong> از سال 1400 آماده خدمات رسانی به مشتریان
          عزیز می باشد.
        </p>
        <p className={styles.text}>
          آدرس شرکت: خیابان آیت اله کاشانی شرکت <strong> hkodroshop</strong>{" "}
        </p>
        <p className={styles.text}>تلفن: 44151644</p>
        <p className={styles.text}>فکس: 44158033</p>

        <footer>تمامی حقوق سایت محفوظ می باشد</footer>
      </div>
    </>
  );
}

export default AboutUs;
