import { addParameters } from "@storybook/react";
import coopTheme from "./coopTheme";
import "@coopdigital/foundations-vars/dist/vars.css";
import "@coopdigital/foundations-global/dist/global.css";

addParameters({
  options: {
    showRoots: true,
  },
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: "^on.*" },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
  docs: {
    theme: coopTheme,
  },
});
