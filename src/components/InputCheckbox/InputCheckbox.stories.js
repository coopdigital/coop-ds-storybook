import React from "react";
import InputCheckbox from "./InputCheckbox";

export default {
  title: "Base/InputCheckbox",
  component: InputCheckbox,
};

export const Basic = (args) => <InputCheckbox {...args} />;
Basic.args = {
  id: "basic",
  name: "basic",
  label: "Basic Checkbox",
  value: 1,
};
