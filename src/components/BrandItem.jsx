import styles from "./BrandItem.module.css";
function BrandItem({ brand, dispatch, setSelect }) {
  const { brandName, brandImage, id } = brand;
  return (
    <li
      className={styles.company}
      onClick={() => {
        if (id === 1) dispatch({ type: "parsList" });
        if (id === 2) dispatch({ type: "saipaList" });
        if (id === 3) dispatch({ type: "iranList" });
        setSelect(true);
      }}
    >
      <p>{brandName}</p>
      <img src={brandImage} alt={id} className={styles.img} />
    </li>
  );
}

export default BrandItem;
