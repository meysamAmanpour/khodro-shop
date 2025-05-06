import { useState, useEffect, useReducer } from "react";
import Brands from "../components/Brands";
import Car from "../components/Car";
import PageNav from "../components/PageNav";
import Spinner from "../components/Spinner";
import styles from "../components/Product.module.css";
import ParsList from "../components/ParsList";
import SaipaList from "../components/SaipaList";
import IranList from "../components/IranList";
import Details from "../components/Details";
const brandsList = [
  { brandName: "شرکت پارس خودرو", brandImage: "/pars.jpg", id: 1 },
  { brandName: "شرکت سایپا", brandImage: "/saipa.jpg", id: 2 },
  { brandName: "شرکت ایران خودرو", brandImage: "/iran.jpg", id: 3 },
];
const initialState = {
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "parsList":
      return { ...state, status: "pars" };
    case "saipaList":
      return { ...state, status: "saipa" };
    case "iranList":
      return { ...state, status: "iran" };
    case "properties":
      return { ...state, status: "details" };
    default:
      throw new Error("unknown action");
  }
}

function Product() {
  const [details, setDetails] = useState([]);
  const [carDetails, setCarDetails] = useState({});
  const [select, setSelect] = useState(false);

  function handleDetails(id) {
    console.log(id);
    // setCarDetails(() => details.find((el) => el.id === id));
    setCarDetails(details.find((el) => Number(el.id) === id));
  }
  useEffect(function () {
    async function fetchDetails() {
      try {
        const res = await fetch("http://localhost:9000/cars");
        const data = await res.json();
        setDetails(data);
        console.log(data);
      } catch {
        alert("خطا در برقراری ارتباط");
      }
    }
    fetchDetails();
  }, []);
  const [{ status }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <PageNav />
      {!select ? (
        <h2 className={styles.titleProduct}>برند مورد نظر را انتخاب کنید...</h2>
      ) : (
        <h2 className={styles.titleProduct}>خودرو خود را انتخاب کنید...</h2>
      )}
      <div className={styles.sidebar}>
        <Car>
          {status === "loading" && <Spinner />}
          {status === "pars" && (
            <ParsList dispatch={dispatch} handleDetails={handleDetails} />
          )}
          {status === "saipa" && (
            <SaipaList dispatch={dispatch} handleDetails={handleDetails} />
          )}
          {status === "iran" && (
            <IranList dispatch={dispatch} handleDetails={handleDetails} />
          )}
          {status === "details" && <Details carDetails={carDetails} />}
        </Car>
        <Brands
          brandsList={brandsList}
          dispatch={dispatch}
          setSelect={setSelect}
        />
      </div>
    </>
  );
}

export default Product;
