import React from "react";
import InputRadio from "./InputRadio";

export default {
  title: "Base/InputRadio",
  component: InputRadio,
};

export const Basic = (args) => <InputRadio {...args} />;
Basic.args = {
  id: "basic",
  name: "basic",
  label: "Basic Radio",
  value: 1,
};
