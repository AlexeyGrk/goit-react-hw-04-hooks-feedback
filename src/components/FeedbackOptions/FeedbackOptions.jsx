import {
  FeedbackButtonsContainer,
  FeedbackButton,
} from "./ FeedbackOptions.styled";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { ImNeutral } from "react-icons/im";

const FeedbackOptions = ({
  updateCounterGood,
  updateCounterNeutral,
  updateCounterBad,
}) => {
  return (
    <FeedbackButtonsContainer>
      <FeedbackButton onClick={updateCounterGood}>
        <AiOutlineLike size={"2em"} />
      </FeedbackButton>
      <FeedbackButton onClick={updateCounterNeutral}>
        <ImNeutral size={"2em"} />
      </FeedbackButton>
      <FeedbackButton onClick={updateCounterBad}>
        <AiOutlineDislike size={"2em"} />
      </FeedbackButton>
    </FeedbackButtonsContainer>
  );
};

export default FeedbackOptions;
