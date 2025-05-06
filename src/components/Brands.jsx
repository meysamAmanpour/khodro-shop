import BrandItem from "./BrandItem";
import styles from "./Brands.module.css";

function Brands({ brandsList, dispatch, setSelect }) {
  return (
    <div className={styles.position}>
      <ul className={styles.brands}>
        {brandsList.map((brand) => (
          <BrandItem
            brand={brand}
            dispatch={dispatch}
            key={brand.brandName}
            setSelect={setSelect}
          />
        ))}
      </ul>
    </div>
  );
}

export default Brands;
