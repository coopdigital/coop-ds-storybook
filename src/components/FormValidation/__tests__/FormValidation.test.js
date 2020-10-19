import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import FormValidation from "../index";

describe("FormValidation", () => {
  it("should render correctly", () => {
    const wrapper = mount(<FormValidation hasErrors />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<FormValidation hasErrors />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should not render when hasErrors is false", () => {
    const tree = renderer.create(<FormValidation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with links", () => {
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
    const tree = renderer
      .create(
        <FormValidation
          heading="title"
          message="message"
          errorLinks={errorLinks}
          hasErrors
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
