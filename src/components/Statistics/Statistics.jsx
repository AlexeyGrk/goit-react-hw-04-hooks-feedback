import React, { Component } from "react";

import {
  FeedbackContainer,
  FeedbackMainTitle,
  FeedbackSecondatyTitle,
  FeedbackStatisticsList,
  FeedbackStatisticsListItem,
  FeedbackStatisticsListItemCounterValue,
} from "./Statistics.styled";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Messages/Notification";
export default class Statistics extends Component {
  static defaultProps = {};

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  updateCounterGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  updateCounterNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  updateCounterBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      Math.floor(
        (this.state.good /
          (this.state.bad + this.state.good + this.state.neutral)) *
          100
      ) || 0
    );
  };

  //
  render() {
    return (
      <FeedbackContainer>
        <FeedbackMainTitle>Please leave feedback</FeedbackMainTitle>
        <FeedbackOptions
          updateCounterGood={this.updateCounterGood}
          updateCounterNeutral={this.updateCounterNeutral}
          updateCounterBad={this.updateCounterBad}
        />
        <FeedbackSecondatyTitle>Statistics</FeedbackSecondatyTitle>
        {this.state.bad + this.state.good + this.state.neutral === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <FeedbackStatisticsList>
            <Section title={"Good :"}>
              <FeedbackStatisticsListItem>
                <FeedbackStatisticsListItemCounterValue>
                  {this.state.good}
                </FeedbackStatisticsListItemCounterValue>
              </FeedbackStatisticsListItem>
            </Section>
            <Section title={" Neutral :"}>
              <FeedbackStatisticsListItem>
                <FeedbackStatisticsListItemCounterValue>
                  {this.state.neutral}
                </FeedbackStatisticsListItemCounterValue>
              </FeedbackStatisticsListItem>
            </Section>
            <Section title={"Bad:"}>
              <FeedbackStatisticsListItem>
                <FeedbackStatisticsListItemCounterValue>
                  {this.state.bad}
                </FeedbackStatisticsListItemCounterValue>
              </FeedbackStatisticsListItem>
            </Section>
            <Section title={"Total :"}>
              <FeedbackStatisticsListItem>
                <FeedbackStatisticsListItemCounterValue>
                  {this.countTotalFeedback()}
                </FeedbackStatisticsListItemCounterValue>
              </FeedbackStatisticsListItem>
            </Section>
            <Section title={" Positive feedback :"}>
              <FeedbackStatisticsListItem>
                <FeedbackStatisticsListItemCounterValue>
                  {this.countPositiveFeedbackPercentage()}%
                </FeedbackStatisticsListItemCounterValue>
              </FeedbackStatisticsListItem>
            </Section>
          </FeedbackStatisticsList>
        )}
      </FeedbackContainer>
    );
  }
}
