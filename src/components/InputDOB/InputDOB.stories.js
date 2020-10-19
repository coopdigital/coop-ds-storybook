import React from "react";
import InputDOB from "./InputDOB";

export default {
  title: "Base/InputDOB",
  component: InputDOB,
};

export const Basic = () => (
  <InputDOB id="basic" name="basic" label="Date of Birth" />
);

const errors = {
  day: "The day you entered is invalid",
  month: "The month you entered is invalid",
  year: "The year you entered is invalid",
};

export const WithError = () => (
  <InputDOB
    id="withError"
    name="withError"
    label="With Error"
    errors={errors}
    hasError
  />
);
