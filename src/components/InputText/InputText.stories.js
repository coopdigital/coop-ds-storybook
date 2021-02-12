import React from "react";
import InputText from "./InputText";

// export default {
//   title: "Base/InputText",
//   component: InputText,
// };

export const Basic = (args) => <InputText {...args} />;
Basic.args = {
  id: "input",
  name: "input",
};

export const All = () => (
  <>
    <InputText id="label" name="label" />
    <InputText id="label" name="label" label="Input with label" />
    <InputText
      id="label"
      name="label"
      label="Input with label and set width"
      width={10}
    />
    <InputText id="label" name="label" hint="Input with hint" />
    <InputText
      id="label"
      name="label"
      label="Input with label and hint"
      hint="Input with label and hint"
    />
  </>
);

export const WithError = () => (
  <>
    <InputText
      id="label"
      name="label"
      label="Input with label"
      errorMsg="Error message"
      hasError
    />
    <InputText
      id="label"
      name="label"
      label="Input with label and set width"
      errorMsg="Error message"
      hasError
      width={10}
    />
    <InputText
      id="label"
      name="label"
      hint="Input with hint"
      errorMsg="Error message"
      hasError
    />
    <InputText
      id="label"
      name="label"
      label="Input with label and hint"
      hint="Input with label and hint"
      errorMsg="Error message"
      hasError
    />
  </>
);
