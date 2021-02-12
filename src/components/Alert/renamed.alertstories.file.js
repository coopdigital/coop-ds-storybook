import React from "react";
import Alert from "./Alert";

export default {
  title: "Base/Alert",
  component: Alert,
  parameters: {
    docs: {
      page: './Alert.mdx'
    }
  },
};

export const Basic = (args) => <Alert {...args} />;
Basic.args = {
  heading: "Example heading",
  link: {
    href: "#",
    text: "Example link text",
  },
};
Basic.parameters = {
  docs: {
    page: './Alert.mdx'
  },
};

const link = { href: "#", text: "Example message" };
export const All = () => (
  <>
    <Alert type="info" heading="Info Alert" link={link} />
    <Alert type="warn" heading="Warning Alert" link={link} />
    <Alert heading="Alert with no link">Standard message</Alert>
  </>
);
