/* eslint-disable react/no-typos */
import React from "react";
import styles from "./Notification.module.css";
import propTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <div className={styles.notificationBox}>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: propTypes.string,
};

export default Notification;
