import React, { useContext } from "react";
import style from "../css/HomeMiddle.module.css";
import Cart from "../components/Cart";
import { context } from "../pages/Store";
import categoryArr from "../utility/categoryArr.js";
import { useNavigate } from "react-router-dom";

//img
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import rightArrow from "../assets/right-arrow.png";

function HomeMiddle() {
  const [{ isCartOpen, resturants }] = useContext(context);
  const navigate = useNavigate();

  const resturantHandler = (id) => {
    navigate(`/resturant/${id}`);
  };

  return (
    <div className={style.container} id="cartScroll">
      <div
        className={style.box}
        style={{ width: isCartOpen ? "calc(100% - 400px)" : "auto" }}
      >
        {/* offer */}
        <div className={style.offerContainer}>
          <div className={style.offerTop}>
            <h4 className={style.offerText}>
              Up to -40% 🎊 Order.uk exclusive deals
            </h4>
            <div className={style.offerButtonContainer}>
              <p className={style.offerButtonText}>Vegan</p>
              <p className={style.offerButtonText}>Sushi</p>
              <div className={style.offerButton}>Pizza & Fast food</div>
              <p className={style.offerButtonText}>others</p>
            </div>
            {/* for small screen */}
            <div className={style.smallOfferBtn}>
              <img src={rightArrow} className={style.offerBtnRightArrow} />
              <p className={style.smallOfferBtnText}>Pizza & Fast food</p>
            </div>
          </div>

          <div className={style.offerImgBox}>
            <img
              src={offer1}
              className={
                !isCartOpen ? `${style.offerImg}` : `${style.offerWrap}`
              }
            />
            <img
              src={offer2}
              className={
                !isCartOpen ? `${style.offerImg}` : `${style.offerWrap}`
              }
            />
            <img
              src={offer3}
              className={
                !isCartOpen ? `${style.offerImg}` : `${style.offerWrap}`
              }
            />
          </div>
        </div>
        {/* categories */}
        <div className={style.categoryContainerTop}>
          <h4 className={style.categoryText}>Order.uk Popular Categories 🤩</h4>
          <div className={style.categoryContainer}>
            {categoryArr.map((item, index) => (
              <div
                className={`${
                  !isCartOpen ? style.categoryNoWrap : style.categoryWrap
                } ${style.categoryBox}`}
                key={index}
              >
                <img src={item.img} className={style.categoryImg} />
                <div className={style.categoryBottom}>
                  <p className={style.categoryBottomHeading}>{item.heading}</p>
                  <p className={style.categoryBottomText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* resturants */}
        <div className={style.resturantContainerTop}>
          <h4 className={style.resturantText}>Popular Restaurants</h4>
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

      {isCartOpen && <Cart />}
    </div>
  );
}

export default HomeMiddle;
