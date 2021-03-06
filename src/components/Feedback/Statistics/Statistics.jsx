/* eslint-disable react/no-typos */
import React from "react";
import styles from "./Statistics.module.css";
import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    <ul className={styles.stats}>
      <li className="stat" key="1">
        Good: {good}
      </li>
      <li className="stat" key="2">
        Neutral: {neutral}
      </li>
      <li className="stat" key="3">
        Bad: {bad}
      </li>
      <li className="stat" key="4">
        total: {total}
      </li>
      <li className="stat" key="5">
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
