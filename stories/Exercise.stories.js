import Exercise from "../components/exercise";
import Question from "../components/question";
import Answer from "../components/answer";
import React from "react";
export default {
  component: Exercise,
  subcomponents: { Question, Answer },
  title: "Exercise",
  args: { question: "Hello", answer: "World" },
};

export const Example = ({ question, answer }) => (
  <Exercise>
    <Question>{question}</Question>
    <Answer> {answer} </Answer>
  </Exercise>
);
