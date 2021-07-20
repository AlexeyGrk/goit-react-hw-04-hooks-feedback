import { useState } from "react";

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

const Statistics = (props) => {
  const [good, setGood] = useState(props.good);
  const [neutral, setNeutral] = useState(props.neutral);
  const [bad, setBad] = useState(props.bad);
  const updateCounterGood = () => {
    setGood((prevState) => prevState + 1);
  };
  const updateCounterNeutral = () => {
    setNeutral((prevState) => prevState + 1);
  };
  const updateCounterBad = () => {
    setBad((prevState) => prevState + 1);
  };
  const countTotalFeedback = () => {
    return bad + good + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (bad + good + neutral)) * 100) || 0;
  };
  return (
    <FeedbackContainer>
      <FeedbackMainTitle>Please leave feedback</FeedbackMainTitle>
      <FeedbackOptions
        updateCounterGood={updateCounterGood}
        updateCounterNeutral={updateCounterNeutral}
        updateCounterBad={updateCounterBad}
      />
      <FeedbackSecondatyTitle>Statistics</FeedbackSecondatyTitle>
      {bad + good + neutral === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <FeedbackStatisticsList>
          <Section title={"Good :"}>
            <FeedbackStatisticsListItem>
              <FeedbackStatisticsListItemCounterValue>
                {good}
              </FeedbackStatisticsListItemCounterValue>
            </FeedbackStatisticsListItem>
          </Section>
          <Section title={" Neutral :"}>
            <FeedbackStatisticsListItem>
              <FeedbackStatisticsListItemCounterValue>
                {neutral}
              </FeedbackStatisticsListItemCounterValue>
            </FeedbackStatisticsListItem>
          </Section>
          <Section title={"Bad:"}>
            <FeedbackStatisticsListItem>
              <FeedbackStatisticsListItemCounterValue>
                {bad}
              </FeedbackStatisticsListItemCounterValue>
            </FeedbackStatisticsListItem>
          </Section>
          <Section title={"Total :"}>
            <FeedbackStatisticsListItem>
              <FeedbackStatisticsListItemCounterValue>
                {countTotalFeedback()}
              </FeedbackStatisticsListItemCounterValue>
            </FeedbackStatisticsListItem>
          </Section>
          <Section title={" Positive feedback :"}>
            <FeedbackStatisticsListItem>
              <FeedbackStatisticsListItemCounterValue>
                {countPositiveFeedbackPercentage()}%
              </FeedbackStatisticsListItemCounterValue>
            </FeedbackStatisticsListItem>
          </Section>
        </FeedbackStatisticsList>
      )}
    </FeedbackContainer>
  );
};

export default Statistics;
