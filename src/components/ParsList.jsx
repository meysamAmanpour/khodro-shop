import styles from "./ParsList.module.css";
const cars = [
  {
    id: 111,
    name: "سهند",
    img: "/sahand.jpg",
    price: 600,
  },
  {
    id: 222,

    name: "ال 90",
    img: "/l90.jpg",
    price: 900,
  },
  {
    id: 333,

    name: "برلیانس",
    img: "/brelians.jpg",
    price: 950,
  },
];

function ParsList({ dispatch, handleDetails }) {
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

export default ParsList;
