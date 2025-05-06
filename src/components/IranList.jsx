import styles from "./IranList.module.css";
const cars = [
  {
    id: 777,

    name: "پرشیا",
    img: "/persia.jpg",
    price: 700,
  },
  {
    id: 888,

    name: "سمند",
    img: "/samand.jpg",
    price: 800,
  },
  {
    id: 999,

    name: "دنا",
    img: "/dena.jpg",
    price: 950,
  },
];

function IranList({ dispatch, handleDetails }) {
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

export default IranList;
