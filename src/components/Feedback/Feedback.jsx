// import PropTypes from "prop-types";
import styles from "./Feedback.module.css";
import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbacks = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let sum = good + neutral + bad;
    return sum;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    let result = (good * 100) / (good + neutral + bad);
    if (!result) {
      result = 0;
    }
    return Math.floor(result * 100) / 100;
  }
  render() {
    const { good, neutral, bad } = this.state;
    const btnStats = Object.keys(this.state);

    return (
      <div className={styles.feedback}>
        <h2>Please, leave us feedback</h2>
        <FeedbackOptions
          options={btnStats}
          onLeaveFeedback={this.handleFeedbacks}
        />

        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default Feedback;
