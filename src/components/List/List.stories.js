import React from "react";
import List from "./List";

export default {
  title: "Base/List",
  component: List,
};

export const Basic = (args) => <List {...args} />;
Basic.args = {
  items: [
    {
      content: "one",
    },
    {
      content: "two",
    },
    {
      content: "three",
    },
  ],
};
