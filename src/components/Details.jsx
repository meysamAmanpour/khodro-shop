import styles from "./Details.module.css";

function Details({ carDetails }) {
  const { img, id, name, company, description } = carDetails;

  console.log(carDetails);
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.details}>
        <h2>کد محصول: {id}</h2>
        <h3>{name}</h3>
        <h4>{company}</h4>
        <p>
          <strong>مشخصات فنی:</strong>
          <br />
          {description}
        </p>
      </div>
      <div className={styles.images}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
}

export default Details;
