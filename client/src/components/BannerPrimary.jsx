import React from "react";
import BannerMsg1 from "../smallComps/BannerMsg1";
import Style from "../css/BannerPrimary.module.css";
import BannerMsg2 from "../smallComps/BannerMsg2";
import BannerMsg3 from "../smallComps/BannerMsg3";

//img
import bannerBg from "../assets/banner-bg.png";
import bannerImg1 from "../assets/bannerImg1.png";
import bannerImg2 from "../assets/bannerImg2.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import rightArrow from "../assets/right-arrow.png";

function BannerPrimary() {
  return (
    <div className={Style.bannerContainer}>
      <div className={Style.bannerLeftContainer}>
        <p className={Style.bannerText}>
          Order Restaurant food, takeaway and groceries.
        </p>
        <h2 className={Style.bannerHeading}>
          Feast Your Senses,
          <br />
          <span className={Style.bannerHeadingSpan}>Fast and Fresh</span>
        </h2>
        <p className={Style.bannerSubHeading}>
          Enter a postcode to see what we deliver
        </p>
        <div className={Style.searchBox}>
          <input
            type="text"
            className={Style.input}
            placeholder="e.g. EC4R 3TE"
          />
          <div className={Style.search}>
            <span className={Style.searchText}>Search</span>
            <img src={rightArrow} className={Style.rightArrow} />
          </div>
        </div>
        <img src={bannerBg} className={Style.bannerBg} />
        <img src={bannerImg1} className={Style.bannerImg1} />
        <img src={bannerImg2} className={Style.bannerImg2} />
        <BannerMsg1 />
        <BannerMsg2 />
        <BannerMsg3 />
        <img src={one} className={Style.one} />
        <img src={two} className={Style.two} />
        <img src={three} className={Style.three} />
      </div>
    </div>
  );
}

export default BannerPrimary;
