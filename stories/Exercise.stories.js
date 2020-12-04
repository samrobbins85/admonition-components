import Exercise from "../components/exercise";
import Question from "../components/question";
import Answer from "../components/answer";
import React from "react";
export default {
  component: Exercise,
  subcomponents: { Question },
  title: "Exercise",
  args: { question: "Hello", answer: "World" },
  decorators: [
    (Story) => (
      <div className="w-1/2 mx-auto">
        <Story />
      </div>
    ),
  ],
};

export const Example = ({ question, answer }) => (
  <Exercise>
    <Question>{question}</Question>
    <Answer> {answer} </Answer>
  </Exercise>
);
