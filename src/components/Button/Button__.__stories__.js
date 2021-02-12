import * as React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "Base/Button",
  component: Button,
};

export const Basic = (args) => <Button argTypes={{ onClick: { action: 'clicked' } }} />;
// Basic.args = { variant: "primary", children: "Label" };

export const All = () => (
  <>
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <div style={{ background: "grey", display: "inline-block" }}>
      <Button variant="white">White</Button>
    </div>
    <Button variant="grey">Grey</Button>
    <Button size="small">Small</Button>
    <Button fullWidth>Full width</Button>
    <Button isLoading>Loading</Button>
  </>
);

export const Sizes = () => (
  <>
    <Button>Default</Button>
    <Button size="small">Small</Button>
  </>
);

export const Disabled = () => (
  <>
    <Button disabled>Primary</Button>
    <Button variant="primary" disabled>
      Primary
    </Button>
    <Button variant="white" disabled>
      White
    </Button>
    <Button variant="grey" disabled>
      Grey
    </Button>
  </>
);
