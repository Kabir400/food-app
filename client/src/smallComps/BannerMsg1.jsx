import React from "react";
import logo from "../assets/logo1.png";
import style from "../css/BannerMsg.module.css";
import tracking from "../assets/Tracking.png";

function BannerMsg1() {
  return (
    <div className={`${style.msgBox} ${style.position1}`}>
      <div className={style.msgTop}>
        <img src={logo} className={style.logo} />
        <p className={style.label}>now</p>
      </div>
      <h3 className={style.messageHeading}>We’ve Received your order!</h3>
      <p className={style.message}>Awaiting Restaurant acceptance </p>
      <img src={tracking} className={style.tracking} />
    </div>
  );
}

export default BannerMsg1;
