//base url
const base_url = import.meta.env.VITE_BASE_URL;

import React, { useState, useEffect } from "react";
import style from "../css/similarResturant.module.css";
import getRequest from "../utility/getRequest.js";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

function SimilarResturant() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [resturants, setResturants] = useState([]);

  const resturantHandler = (id) => {
    navigate(`/resturant/${id}`);
  };

  //fetch resturant data
  const fetchSimilarResturant = async () => {
    const response = await getRequest(`${base_url}/resturant/similar/${id}`);
    if (response.suceess) {
      setResturants(response.data);
    } else {
      toast.error(response.message, { position: "top-right", autoClose: 3000 });
    }
  };

  useEffect(() => {
    (async () => {
      await fetchSimilarResturant();
    })();
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.resturantContainerTop}>
        <h4 className={style.resturantText}>Similar Restaurants</h4>
        <div className={style.resturantContainer}>
          {resturants.map((item, index) => (
            <div
              className={style.resturantBox}
              key={index}
              onClick={() => {
                resturantHandler(item._id);
              }}
            >
              <img src={item.img} className={style.resturantImg} />
              <div className={style.resturantBottom}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimilarResturant;
