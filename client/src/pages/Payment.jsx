import React from "react";
import style from "../css/Payment.module.css";
import { Link } from "react-router-dom";

//img
import leftArrow from "../assets/arrow-left.png";
import walet from "../assets/waletIcon.png";
import paypal from "../assets/paypal.png";
import strip from "../assets/strip.png";
import masterCard from "../assets/masterCard.png";
import deliveryNext from "../assets/deliveryNext.png";
import add from "../assets/Add.png";

import Nav from "../components/Nav";

function Payment() {
  return (
    <div>
      <Nav></Nav>
      <div className={style.container}>
        <div className={style.header}>
          <Link to="/checkout">
            <img src={leftArrow} className={leftArrow} />
          </Link>
          <h3 className={style.heading}>Choose and Pay</h3>
        </div>

        <div className={style.body}>
          <div className={style.bodyLeft}>
            {/* walet styling */}
            <div className={style.waletContainer}>
              <div className={style.waletBox}>
                <img src={walet} className={style.waletIcon} />
                <div className={style.waletDetails}>
                  <h3 className={style.waletTitle}>Wallet</h3>
                  <p className={style.waletText}>Available balance: ₹000</p>
                </div>
              </div>
              <img src={deliveryNext} className={style.deliveryNext} />
            </div>
            {/* other methods */}
            <div className={style.otherMethodContainer}>
              <div className={style.otherMethodBox}>
                <div className={style.otherMethodDiv}>
                  <img src={masterCard} className={style.otherMethodImg} />
                  <p className={style.otherMethodText}>Master Card</p>
                </div>
                <input
                  type="radio"
                  id="maestro"
                  name="payment"
                  value="Maeser card"
                />
              </div>
              {/* paypal */}
              <div className={style.otherMethodBox}>
                <div className={style.otherMethodDiv}>
                  <img src={paypal} className={style.otherMethodImg} />
                  <p className={style.otherMethodText}>Paypal</p>
                </div>
                <input
                  type="radio"
                  id="maestro"
                  name="payment"
                  value="paypal"
                />
              </div>{" "}
              <div className={style.otherMethodBox}>
                <div className={style.otherMethodDiv}>
                  <img src={strip} className={style.otherMethodImg} />
                  <p className={style.otherMethodText}>Strip</p>
                </div>
                <input type="radio" id="maestro" name="payment" value="strip" />
              </div>
            </div>
            {/* add debit card */}
            <div className={style.debitCard}>
              <img src={add} className={style.addIcon} />
              <p className={style.debitCardText}>Add Debit Card</p>
            </div>
          </div>

          {/* body right */}

          <div className={style.bodyRight}>
            <div className={style.bodyRightContainer}>
              <div className={style.bodyRightTop}>
                <p className={style.bodyRightText}>Amount to be payed</p>
                <h4 className={style.bodyRightPrice}>₹240</h4>
              </div>
              <div className={style.payment}>Proceed Payment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
