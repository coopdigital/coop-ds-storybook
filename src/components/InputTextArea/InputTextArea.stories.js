import React from "react";
import InputTextArea from "./InputTextArea";

// export default {
//   title: "Base/InputTextArea",
//   component: InputTextArea,
// };

export const Basic = (args) => <InputTextArea {...args} />;
Basic.args = { id: "basic", name: "basic" };

export const All = () => (
  <>
    <InputTextArea id="label" name="label" label="Input with label" />
    <InputTextArea id="label" name="label" hint="Input with hint" />
    <InputTextArea
      id="label"
      name="label"
      label="Input with label and hint"
      hint="Input with label and hint"
    />
  </>
);

export const WithError = () => (
  <>
    <InputTextArea
      id="label"
      name="label"
      label="Input with label"
      errorMsg="Error message"
      hasError
    />
    <InputTextArea
      id="label"
      name="label"
      hint="Input with hint"
      errorMsg="Error message"
      hasError
    />
    <InputTextArea
      id="label"
      name="label"
      label="Input with label and hint"
      hint="Input with label and hint"
      errorMsg="Error message"
      hasError
    />
  </>
);
