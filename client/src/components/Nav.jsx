import React, { useContext } from "react";

import style from "../css/nav.module.css";
import { Link, NavLink } from "react-router-dom";
import { context } from "../pages/Store";

//img
import location from "../assets/Location.png";
import cart from "../assets/Cart.png";
import forward from "../assets/Forward.png";
import avater from "../assets/avater.png";
import logo from "../assets/logo1.png";
import menue from "../assets/Menu.png";
import avater2 from "../assets/avater2.png";
import cart2 from "../assets/cartSmall.png";

function Nav() {
  const [{ isLogin, user }, setValue] = useContext(context);

  const cartHandler = () => {
    setValue((prev) => {
      const isCartOpen = !prev.isCartOpen;

      if (isCartOpen && window.innerWidth > 1300) {
        document
          .getElementById("cartScroll")
          .scrollIntoView({ behavior: "smooth" });
      }

      return { ...prev, isCartOpen };
    });
  };
  return (
    <>
      <div className={style.nav}>
        <div className={style.navTop}>
          <div className={style.offer}>
            <p className={style.star}>🌟</p>
            <p className={style.offerText}>
              Get 5% Off your first order,{" "}
              <span className={style.offerSpan}>Promo: ORDER5</span>
            </p>
          </div>

          <div className={style.addressCart}>
            {/* address */}
            <div className={style.address}>
              <img src={location} className={style.locationIcon} />
              <p className={style.locationText}>
                {user?.address?.length > 0
                  ? user?.address[0].fullAddress?.length > 25
                    ? user?.address[0].fullAddress?.slice(0, 25) + "..."
                    : user?.address[0].fullAddress
                  : "No Address Added"}
              </p>
              <Link to="/address" className={style.locationLink}>
                Change Location
              </Link>
            </div>
            {/* cart */}
            <div className={style.cartContainer} onClick={cartHandler}>
              <div className={style.cart}>
                <img src={cart} className={style.cartIcon} />
                <p className={style.cartText}>My Cart</p>
              </div>
              <div className={style.cartMiddle}></div>
              <div className={style.forwardBox}>
                <img src={forward} className={style.forwardIcon} />
              </div>
            </div>
          </div>
        </div>

        {/* nav-bottom */}
        <div className={style.navBottom}>
          <img src={logo} className={style.logo} />
          <div className={style.links}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? style.linkActive : style.link
              }
            >
              Home
            </NavLink>
            <div className={style.link}>Browse Menu </div>
            <div className={style.link}>Special Offers</div>
            <div className={style.link}>Restaurants</div>
            <div className={style.link}> Track Order</div>
            <div className={style.button}>
              <img src={avater} className={style.avater} />
              <p className={style.buttonText}>
                {isLogin ? (
                  `Hey ${user.name.split(" ")[0]}`
                ) : (
                  <Link to="/login"> Login/Signup</Link>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.navSmall}>
        <div className={style.smallLogoBox}>
          <img src={logo} className={style.smallLogo} />
        </div>
        <div className={style.menueBox}>
          <img src={menue} className={style.smallMenueIcon} />
        </div>
        <div className={style.profileBox}>
          <img src={avater2} className={style.smallProfileIcon} />
          <p className={style.smallProfileText}>
            {isLogin ? (
              `Hey ${user.name.split(" ")[0]}`
            ) : (
              <Link to="/login"> Login/Signup</Link>
            )}
          </p>
        </div>
        <div className={style.smallCartBox} onClick={cartHandler}>
          <img src={cart2} className={style.smallCartIcon} />
          <p className={style.smallCartText}>My Cart</p>
        </div>
      </div>
      <div className={style.smallLocation}>
        <img src={location} className={style.smallLocationIcon} />
        <p className={style.smallLocationText}>Lution Street, N4G-00....</p>
      </div>
    </>
  );
}

export default Nav;
