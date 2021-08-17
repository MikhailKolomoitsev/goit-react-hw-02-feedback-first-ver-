/* eslint-disable react/no-typos */
import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    <ul className={styles.stats}>
      <li className="stat">Good: {good}</li>
      <li className="stat">Neutral: {neutral}</li>
      <li className="stat">Bad: {bad}</li>
      <li className="stat">total: {total}</li>
      <li className="stat">Positive feedback: {positivePercentage}%</li>
    </ul>
  </div>
);

Statistics.PropTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
