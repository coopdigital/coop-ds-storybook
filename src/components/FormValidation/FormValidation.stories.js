import React from "react";
import FormValidation from "./FormValidation";

export default {
  title: "Base/FormValidation",
  component: FormValidation,
};

const errorLinks = [
  {
    href: "#client-name",
    text: "enter your full name",
  },
  {
    href: "#client-email-address",
    text: "enter an email address",
  },
];

export const Basic = (args) => <FormValidation {...args} />;
Basic.args = {
  heading: "There’s a problem",
  message: "Check the form. You must:",
  errorLinks,
  hasErrors: true,
};

export const CustomBody = () => (
  <FormValidation hasErrors>
    <p>Add custom body</p>
  </FormValidation>
);
