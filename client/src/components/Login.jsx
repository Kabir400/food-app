//base url
const base_url = import.meta.env.VITE_BASE_URL;

import { useState } from "react";
import style from "../css/auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import postRequest from "../utility/postRequest";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const result = await postRequest(`${base_url}/login`, data);
    if (result.suceess === true) {
      toast.success("Login successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/");
      setIsPending(false);
    } else {
      setIsPending(false);
      toast.error(result.message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className={style.inputContainer}>
      <div className={style.inputBox}>
        <p className={style.inputLable}>Email</p>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={style.input}
          placeholder="Example@email.com"
        />
      </div>
      <div className={style.inputBox}>
        <p className={style.inputLable}>Password</p>
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className={style.input}
          placeholder="At least 8 characters"
        />
      </div>

      <div className={style.inputButton} onClick={loginHandler}>
        {isPending ? "Loading..." : "Sign in"}
      </div>
      <Link to={"/signup"} className={style.inputText}>
        Don't you have an account?{" "}
        <span className={style.inputLink}>Sign up</span>
      </Link>
    </div>
  );
}

export default Login;
