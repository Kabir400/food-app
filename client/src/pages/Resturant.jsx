//base url
const base_url = import.meta.env.VITE_BASE_URL;

import React, { useEffect, useState, useContext } from "react";
import { context } from "./Store.jsx";
import getRequest from "../utility/getRequest.js";
import postRequest from "../utility/postRequest.js";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import style from "../css/resturant.module.css";

//components
import Nav from "../components/Nav.jsx";
import ResturantBanner from "../components/ResturantBanner.jsx";
import ResturantSearchSort from "../components/ResturantSearchSort.jsx";
import FoodItems from "../components/FoodItems.jsx";
import Loader from "../components/Loader.jsx";
import ResturantTiming from "../components/ResturantTiming.jsx";
import ResturantMap from "../components/ResturantMap.jsx";
import Reviews from "../components/Reviews.jsx";
import SimilarResturant from "../components/SimilarResturant.jsx";
import CartPopup from "../components/CartPopup.jsx";

function Resturant() {
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoding, setIsLoading] = useState(false);
  const [data, setData] = useContext(context);
  const { id } = useParams();

  // checkLogin status
  const fetchLoginStatus = async () => {
    if (!data.loginChecked) {
      const result = await postRequest(`${base_url}/checklogin`);
      if (result.status === 401) {
        setData((prev) => ({ ...prev, isLogin: false, loginChecked: true }));
      } else if (result.suceess) {
        setData((prev) => ({
          ...prev,
          isLogin: true,
          user: result.data,
          loginChecked: true,
        }));
      }
    }
  };

  //fetch resturant data
  const fetchRestaurantData = async () => {
    const response = await getRequest(`${base_url}/resturant/${id}`);
    if (response.status == 404) {
      setIsNotFound(true);
      return;
    }
    if (response.suceess) {
      setData((prev) => ({ ...prev, clickedResturant: response.data }));
    } else {
      toast.error(response.message, { position: "top-right", autoClose: 3000 });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      await fetchLoginStatus();
      await fetchRestaurantData();
      setIsLoading(false);
    })();
  }, [id]);

  if (isLoding) {
    return <Loader />;
  }

  if (isNotFound) {
    return <p>Resturant NotFound</p>;
  }
  return (
    <div>
      <Nav />
      <ResturantBanner></ResturantBanner>
      <ResturantSearchSort></ResturantSearchSort>
      <FoodItems />
      <div className={style.resturantBottom}>
        <ResturantTiming></ResturantTiming>
        <ResturantMap></ResturantMap>
        <Reviews></Reviews>
        <SimilarResturant />
      </div>
      <CartPopup />
    </div>
  );
}

export default Resturant;
