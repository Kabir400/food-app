import React from "react";
import style from "../css/auth.module.css";
import Login from "../components/Login";

//img
import authImg from "../assets/auth-img.png";
import Logo1 from "../assets/logo1.png";

function Auth() {
  return (
    <div className={style.authContainer}>
      <div className={style.authBody}>
        <div className={style.authLeft}>
          <div className={style.authLeftContainer}>
            <img className={style.logo} src={Logo1} alt="Order.UK" />
            <h2 className={style.welcomeMsg}>Welcome Back 👋</h2>
            <p className={style.subHeading}>
              Today is a new day. It's your day. You shape it. Sign in to start
              ordering.
            </p>
            <Login />
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
