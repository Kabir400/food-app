import React from "react";
import style from "../css/stats.module.css";

function Stats() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <p className={style.numbers}>546+</p>
        <p className={style.text}>Registered Riders</p>
      </div>
      <div className={style.box}>
        <p className={style.numbers}>789,900+</p>
        <p className={style.text}>Orders Delivered</p>
      </div>
      <div className={style.box}>
        <p className={style.numbers}>690+</p>
        <p className={style.text}>Restaurants Partnered</p>
      </div>
      <div className={style.box}>
        <p className={style.numbers}>17,457+</p>
        <p className={style.text}>Food items</p>
      </div>
    </div>
  );
}

export default Stats;
