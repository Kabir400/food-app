//base url-->
const base_url = import.meta.env.VITE_BASE_URL;

import { useState } from "react";
import style from "../css/auth.module.css";
import { Link } from "react-router-dom";
import postRequest from "../utility/postRequest";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [isPending, setIsPending] = useState(false);

  const signupHandler = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const result = await postRequest(`${base_url}/signup`, data);

    if (result.suceess === true) {
      toast.success("Your account created successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/login");
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
    <div
      className={style.inputContainer}
      style={{ gap: "13px", marginTop: "12px" }}
    >
      <div className={style.inputBox}>
        <p className={style.inputLable} style={{ fontSize: "15px" }}>
          Name
        </p>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={style.input}
          placeholder="eg. John A"
        />
      </div>
      <div className={style.inputBox}>
        <p className={style.inputLable} style={{ fontSize: "15px" }}>
          Phone Number
        </p>
        <input
          type="text"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className={style.input}
          placeholder="Enter your 10 digit mobile number"
        />
      </div>
      <div className={style.inputBox}>
        <p className={style.inputLable} style={{ fontSize: "15px" }}>
          Email
        </p>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={style.input}
          placeholder="Example@email.com"
        />
      </div>
      <div className={style.inputBox}>
        <p className={style.inputLable} style={{ fontSize: "15px" }}>
          Password
        </p>
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className={style.input}
          placeholder="At least 8 characters"
        />
      </div>

      <div className={style.inputButton} onClick={(e) => signupHandler(e)}>
        {isPending ? "Loading..." : "Sign up"}
      </div>
      <Link
        to={"/login"}
        className={style.inputText}
        style={{ marginTop: "1px" }}
      >
        Don't you have an account?{" "}
        <span className={style.inputLink}>Sign in</span>
      </Link>
    </div>
  );
}

export default Signup;
