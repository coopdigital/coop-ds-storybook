import React from "react";
import { action } from "@storybook/addon-actions";
import FormContainer from "./FormContainer";

export default {
  title: "Base/FormContainer",
  component: FormContainer,
};

export const Basic = (args) => <FormContainer {...args} />;
Basic.args = {};

export const CustomProps = () => (
  <FormContainer
    id="custom"
    className="customClass"
    onClick={action("clicked")}
  >
    Props will be propagated to the form element
  </FormContainer>
);
