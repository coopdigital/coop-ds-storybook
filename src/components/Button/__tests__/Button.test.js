import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Button from "../index";

describe("Button", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Button>Button</Button>);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should support all variants", () => {
    const Variants = () => (
      <div>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="white">White</Button>
        <Button variant="grey">Grey</Button>
      </div>
    );

    const tree = renderer.create(<Variants />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(<Variants />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should support all sizes", () => {
    const Sizes = () => (
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Default/Medium</Button>
      </div>
    );

    const tree = renderer.create(<Sizes />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(<Sizes />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render different text", () => {
    const wrapper = mount(<Button>button</Button>);
    expect(wrapper.text()).toContain("button");

    wrapper.setProps({
      children: <span>New Text</span>,
    });
    expect(wrapper.text()).toContain("New Text");
  });

  it("should render empty button correctly", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
