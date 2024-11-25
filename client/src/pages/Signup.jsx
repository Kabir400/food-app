import React from "react";
import style from "../css/auth.module.css";
import Signup from "../components/Signup";

//img
import authImg from "../assets/auth-img.png";
import Logo1 from "../assets/logo1.png";

function Auth() {
  return (
    <div className={style.authContainer}>
      <div className={style.authBody}>
        <div className={style.authLeft}>
          <div className={style.authLeftContainer} style={{ gap: "0" }}>
            <img
              className={style.logo}
              src={Logo1}
              alt="Order.UK"
              style={{ width: "173px" }}
            />
            <h2 className={style.welcomeMsg} style={{ fontSize: "26px" }}>
              Welcome Back 👋
            </h2>
            <p className={style.subHeading} style={{ fontSize: "14px" }}>
              Today is a new day. It's your day. You shape it. Sign in to start
              ordering.
            </p>
            <Signup />
          </div>
        </div>
        <div className={style.authRight}>
          <div className={style.authRightContainer}>
            <img src={authImg} alt="Auth Img" className={style.authImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
