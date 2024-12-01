import React from "react";
import style from "../css/Banner2.module.css";

//img
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import bannerHeading1 from "../assets/banner2Heading1.png";
import banner2Heading2 from "../assets/banner2Heading2.png";
import apps from "../assets/apps.png";
import bannerImg from "../assets/banner2Img.png";

function Banner2() {
  return (
    <div className={style.container}>
      {/* banner2 */}
      <img src={banner2} className={style.banner1} />
      {/* for small screen */}
      <div className={style.bannerContainer}>
        <img src={bannerHeading1} className={style.bannerHeading1} />
        <img src={banner2Heading2} className={style.bannerHeading2} />
        <p className={style.bannerText}>
          Download the Order.uk app for faster ordering
        </p>
        <img src={apps} className={style.apps} />
        <img src={bannerImg} className={style.bannerImg} />
      </div>

      {/* child banners   */}
      <div className={style.childBannerContainer}>
        <img src={banner3} className={style.childbanner} />
        <img src={banner4} className={style.childbanner} />
      </div>
    </div>
  );
}

export default Banner2;
