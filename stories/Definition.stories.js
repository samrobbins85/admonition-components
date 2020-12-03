import React from "react";

import Definition from "../components/definition";

export default {
  title: "Example/Definition",
  component: Definition,
};

const Template = (args) => <Definition {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Hello",
  children: "World",
};
