import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Text from "../index";

describe("Text", () => {
  it("should render P element in the default", () => {
    const wrapper = mount(<Text>test-value</Text>);
    expect(wrapper.find("p").length).toBe(1);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should work with all variants", () => {
    const Variants = () => (
      <div>
        <Text variant="mega">Mega</Text>
        <Text variant="lead">Lead</Text>
        <Text variant="regular">Regular</Text>
        <Text size="medium">Medium</Text>
        <Text variant="bold">Bold</Text>
      </div>
    );

    const wrapper = mount(<Variants />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Variants />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("the specified element should be rendered", () => {
    const elements = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "a"];
    const Elements = () => (
      <div>
        {elements.map((el, index) => {
          const key = `${el}-${index}`;
          return <Text key={key}>test-value</Text>;
        })}
      </div>
    );
    const wrapper = mount(<Elements />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Elements />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
