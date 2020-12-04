import Exercise from "../components/exercise";
import Question from "../components/question";
import Answer from "../components/answer";
import React from "react";
export default {
  component: Exercise,
  subcomponents: { Question },
  title: "Exercise",
};

export const OneItem = (args) => (
  <Exercise {...args}>
    <Question>Hello</Question>
    <Answer>World</Answer>
  </Exercise>
);
