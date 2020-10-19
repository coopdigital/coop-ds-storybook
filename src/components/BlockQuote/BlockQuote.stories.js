import React from "react";
import BlockQuote from "./BlockQuote";

export default {
  title: "Base/BlockQuote",
  component: BlockQuote,
};

export const Basic = (args) => (
  <BlockQuote {...args}>This is a quote.</BlockQuote>
);
Basic.args = {
  citation: "citation",
};
