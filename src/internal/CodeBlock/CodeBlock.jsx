import react from "react";
import { renderComponentToHtml } from "../../../.storybook/renderToHtml";
import { Preview } from "@storybook/addon-docs/blocks";

const CodeBlock = ({ component }) => {
  const codeToDisplay = renderComponentToHtml(component);
  return (
    <pre>
      <code>{codeToDisplay}</code>
    </pre>
  );
};

export default CodeBlock;
