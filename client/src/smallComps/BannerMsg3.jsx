import React from "react";
import logo from "../assets/logo1.png";
import style from "../css/BannerMsg.module.css";

function BannerMsg1() {
  return (
    <div className={`${style.msgBox} ${style.position3}`}>
      <div className={style.msgTop}>
        <img src={logo} className={style.logo} />
        <p className={style.label}>now</p>
      </div>
      <h3 className={style.messageHeading}>Your rider's nearby🎉</h3>
      <p className={style.message}>They're almost here - get ready!</p>
    </div>
  );
}

export default BannerMsg1;
