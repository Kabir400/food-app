//base url
const base_url = import.meta.env.VITE_BASE_URL;

import React, { useContext, useState, useEffect } from "react";

import Nav from "../components/Nav";
import style from "../css/CheckOut.module.css";
import { cartContext, context } from "./Store";
import postRequest from "../utility/postRequest";

//img
import leftArrow from "../assets/arrow-left.png";
import delivaryAddressIcon from "../assets/delivaryAddressIcon.png";
import deliveryNext from "../assets/deliveryNext.png";
import orengeLeftArrow from "../assets/orengeLeftArrow.png";
const foodimg =
  "https://res.cloudinary.com/dv4re7bf8/image/upload/v1733059282/burger_sr2jml.png";

function CheckOut() {
  const { state } = useContext(cartContext);
  const [data, setData] = useContext(context);

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

  useEffect(() => {
    (async () => {
      await fetchLoginStatus();
    })();
  }, []);

  return (
    <div>
      <Nav />
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.header}>
            <img src={orengeLeftArrow} className={style.smallArrowLeft} />
            <img src={leftArrow} className={style.leftArrow} />
            <h3 className={style.heading}>Your Order Details</h3>
          </div>
          <div className={style.body}>
            {/* body left */}
            <div className={style.bodyLeft}>
              <div className={style.bodyLeftTop}>
                {state.cart.map((item, index) => (
                  <div className={style.foodItem} key={index}>
                    <div className={style.foodItemBox}>
                      <img src={item.img} className={style.foodImg} />
                      <div className={style.foodDetails}>
                        <h4 className={style.foodName}>{item.title}</h4>
                        <p className={style.qty}>{item.quantity}x item</p>
                      </div>
                    </div>
                    <p className={style.foodPrice}>₹{item.price}</p>
                  </div>
                ))}
              </div>
              <div className={style.bodyLeftBottom}>
                <p className={style.notes}>Notes</p>
                <input
                  type="text"
                  className={style.notesInput}
                  placeholder="Add order notes"
                />
              </div>
            </div>

            {/* body right */}
            <div className={style.bodyRight}>
              {/* address box */}
              <div className={style.deliveryAddress}>
                <div className={style.deliveryAddressLeft}>
                  <img
                    src={delivaryAddressIcon}
                    className={style.deliveryAddressIcon}
                  />
                  <div className={style.deliveryDetails}>
                    <h3 className={style.deliveryAddressTitle}>
                      Delivery Address
                    </h3>
                    <p className={style.deliveryAddressText}>
                      {data?.user?.address?.[data?.slectedAddressIndex]
                        ?.fullAddress || "No address available"}
                    </p>
                  </div>
                </div>
                <img src={deliveryNext} className={style.deliveryNext} />
              </div>

              {/* order summary */}
              <div className={style.orderSumary}>
                <div className={style.orderItems}>
                  <p className={style.items}>Items</p>
                  <p className={style.itemPrice}>₹230</p>
                </div>
                <div className={style.orderTax}>
                  <p className={style.tax}>Sales Tax</p>
                  <p className={style.taxPrice}>₹10</p>
                </div>
              </div>
              {/* subtotal */}
              <div className={style.subTotal}>
                <p className={style.subTotalText}>Subtotal (3 items)</p>
                <p className={style.subTotalPrice}>₹240</p>
              </div>

              <div className={style.paymentBtn}>Choose Payment Method</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
