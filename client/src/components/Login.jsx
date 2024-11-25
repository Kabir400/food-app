import React from "react";
import style from "../css/auth.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={style.inputContainer}>
      <div className={style.inputBox}>
        <p className={style.inputLable}>Email</p>
        <input
          type="email"
          className={style.input}
          placeholder="Example@email.com"
        />
      </div>
      <div className={style.inputBox}>
        <p className={style.inputLable}>Password</p>
        <input
          type="password"
          className={style.input}
          placeholder="At least 8 characters"
        />
      </div>

      <div className={style.inputButton}>Sign in</div>
      <Link to={"/signup"} className={style.inputText}>
        Don't you have an account?{" "}
        <span className={style.inputLink}>Sign up</span>
      </Link>
    </div>
  );
}

export default Login;
