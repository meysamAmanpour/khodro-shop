import styles from "./SaipaList.module.css";
const cars = [
  {
    id: 444,

    name: "پراید",
    img: "/pride.jpg",
    price: 300,
  },
  {
    id: 555,

    name: "تیبا",
    img: "/tiba.jpg",
    price: 500,
  },
  {
    id: 666,

    name: "کوییک",
    img: "/quick.jpg",
    price: 600,
  },
];

function SaipaList({ dispatch, handleDetails }) {
  return (
    <ul className={styles.carList}>
      {cars.map((car) => (
        <li className={styles.item}>
          <img src={car.img} alt={car.name} />
          <div className={styles.price}>
            <h3>{car.name}</h3>
            <span> قیمت :{car.price} میلیون</span>
          </div>
          <div className={styles.btn}>
            <button className={styles.buyBtn}>خرید</button>
            <button
              className={styles.buyBtn}
              onClick={() => {
                dispatch({ type: "properties" });
                handleDetails(car.id);
              }}
            >
              جزییات
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SaipaList;
