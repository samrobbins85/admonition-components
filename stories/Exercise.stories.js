import Exercise from "../components/exercise";
import Question from "../components/question";
import Answer from "../components/answer";
import React from "react";
export default {
  component: Exercise,
  subcomponents: { Question },
  title: "Exercise",
  args: { children: "Hello" },
  decorators: [
    (Story) => (
      <div className="w-1/2 mx-auto">
        <Story />
      </div>
    ),
  ],
};

export const Example = (args) => (
  <Exercise>
    <Question {...args} />
    <Answer {...args} />
  </Exercise>
);
