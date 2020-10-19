import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import List from "../index";

describe("List", () => {
  it("should render default List", () => {
    const wrapper = mount(<List />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<List />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should work with all variants", () => {
    const items = [
      {
        content: "one",
      },
      {
        content: 2,
      },
      {
        content: <div>three</div>,
      },
    ];

    const Variants = () => (
      <div>
        <List type="bullet" items={items} />
        <List type="numbered" items={items} />
      </div>
    );

    const wrapper = mount(<Variants />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Variants />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
