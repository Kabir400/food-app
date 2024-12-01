import React from "react";
import styles from "../css/loader.module.css"; // Importing the modular CSS

const Loader = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default Loader;
