import React from "react";
import { controls, button } from "./FeedbackOptions.module.css";
import propTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={controls}>
    {options.map((option, index) => (
      <button
        type="button"
        className={button}
        name={option}
        onClick={onLeaveFeedback}
        key={index}
      >
        {option}
      </button>
    ))}
  </div>
);

// eslint-disable-next-line react/no-typos
FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
