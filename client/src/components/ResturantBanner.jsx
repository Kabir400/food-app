import React, { useContext } from "react";
import style from "../css/ResturantBanner.module.css";
import StarRating from "./StarRating";
import { context } from "../pages/Store";

// Images
import bike from "../assets/bike.png";
import minOrder from "../assets/minOrder.png";
import resturantBannerImg from "../assets/ResturantBannerImg.png";
import clock from "../assets/Clock.png";

function ResturantBanner() {
  const [{ clickedResturant }, setData] = useContext(context);

  return (
    <div className={style.container}>
      {/* Black overlay */}
      <div className={style.overlay}></div>

      {/* Content on the left */}
      <div className={style.bannerLeft}>
        <p className={style.bannerLeftText}>I'm lovin' it!</p>
        <h3 className={style.bannerLeftHeading}>{clickedResturant?.name}</h3>
        <div className={style.bannerLeftButtons}>
          <div className={style.bannerLeftBtn}>
            <img
              src={minOrder}
              alt="Order Icon"
              className={style.bannerBtnImg}
            />
            <p className={style.bannerBtnText}>Delivery in 20-25 Minutes</p>
          </div>
          <div className={style.bannerLeftBtn}>
            <img src={bike} alt="Bike Icon" className={style.bannerBtnImg} />
            <p className={style.bannerBtnText}>Minimum Order: 250 INR</p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className={style.bannerRight}>
        <img
          src={resturantBannerImg}
          alt="Resturant Banner"
          className={style.bannerRightImg}
        />
        <div className={style.ratingContainer}>
          <p className={style.rating}>{clickedResturant?.rating}</p>
          <StarRating rating={clickedResturant?.rating} />
          <p className={style.noOfReviews}>
            {clickedResturant?.noOfReviews} reviews
          </p>
        </div>
      </div>

      {/* bottom section */}
      <div className={style.bannerBottom}>
        <img src={clock} className={style.clock} />
        <p className={style.bannerBottomText}>Open until 3:00 AM</p>
      </div>
    </div>
  );
}

export default ResturantBanner;
