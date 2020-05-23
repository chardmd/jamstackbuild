// @flow strict
import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  const [response, setResponse] = useState();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { result } = await addToMailchimp(email);
    setResponse(result);
  };

  return (
    <div className={styles["subscribe"]}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles["btn"]}>
          Stay Updated
        </button>
        {response === "success" && (
          <span className={styles["success"]}>Thank you for subscribing</span>
        )}
        {response === "error" && (
          <span className={styles["error"]}>Email already signed up</span>
        )}
      </form>
    </div>
  );
};

export default Subscribe;
