import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Alert from "../index";

describe("Alert", () => {
  it("should render default Alert", () => {
    const wrapper = mount(<Alert />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Alert />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should work with all variants", () => {
    const link = { href: "#", text: "Example message" };
    const Variants = () => (
      <div>
        <Alert type="info" heading="Info Alert" link={link} />
        <Alert type="warn" heading="Warning Alert" link={link} />
        <Alert heading="Alert with no link">Standard message</Alert>
      </div>
    );

    const wrapper = mount(<Variants />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Variants />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
