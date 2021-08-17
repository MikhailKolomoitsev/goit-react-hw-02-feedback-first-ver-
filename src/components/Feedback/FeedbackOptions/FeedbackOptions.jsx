import React from "react";
import { controls, button } from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={controls}>
    {options.map((option) => (
      <button
        type="button"
        className={button}
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
