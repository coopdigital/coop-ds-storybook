import React from "react";
import InputRadioGroup from "./InputRadioGroup";
import InputRadio from "../InputRadio";

export default {
  title: "Base/InputRadioGroup",
  component: InputRadioGroup,
};

export const RadioExample = () => (
  <>
    <InputRadioGroup
      id="group-1"
      legend="Radio Group with hint"
      hint="Hint message"
    >
      <InputRadio id="radio-1" name="radio-1" label="Radio 1" value={1} />
      <InputRadio id="radio-2" name="radio-2" label="Radio 2" value={2} />
      <InputRadio id="radio-3" name="radio-3" label="Radio 3" value={3} />
    </InputRadioGroup>
    <InputRadioGroup
      id="group-2"
      legend="Radio Group with hint and error"
      hint="Hint message"
      errorMsg="Error message"
      hasError
    >
      <InputRadio id="radio-4" name="radio-4" label="Radio 4" value={4} />
      <InputRadio id="radio-5" name="radio-5" label="Radio 5" value={5} />
      <InputRadio id="radio-6" name="radio-6" label="Radio 6" value={6} />
    </InputRadioGroup>
  </>
);
