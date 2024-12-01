import React from "react";
import logo from "../assets/logo1.png";
import style from "../css/BannerMsg.module.css";
import tick from "../assets/tick.png";

function BannerMsg1() {
  return (
    <div className={`${style.msgBox} ${style.position2}`}>
      <div className={style.msgTop}>
        <img src={logo} className={style.logo} />
        <p className={style.label}>now</p>
      </div>
      <div className={style.headingBox}>
        <h3 className={style.messageHeading}>Order Accepted! </h3>
        <img src={tick} className={style.tick} />
      </div>
      <p className={style.message}>Your order will be delivered shortly</p>
    </div>
  );
}

export default BannerMsg1;
