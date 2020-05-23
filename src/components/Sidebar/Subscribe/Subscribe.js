// @flow strict
import React from "react";
import styles from "./Subscribe.module.scss";

const Subscribe = () => (
  <div className={styles["subscribe"]}>
    <input type="text" />
    <button className={styles["btn"]}>Stay Updated</button>
  </div>
);

export default Subscribe;
