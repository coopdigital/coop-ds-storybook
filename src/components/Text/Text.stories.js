import React from "react";
import Text from "./Text";

export default {
  title: "Base/Text",
  component: Text,
};

export const Basic = (args) => <Text {...args} />;
Basic.args = { children: "Label" };

export const All = () => (
  <>
    <Text variant="mega">Mega</Text>
    <Text variant="lead">Lead</Text>
    <Text variant="regular">Regular</Text>
    <Text size="medium">Medium</Text>
    <Text variant="bold">Bold</Text>
  </>
);
