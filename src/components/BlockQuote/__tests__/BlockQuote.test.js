import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import BlockQuote from "../index";

describe("BlockQuote", () => {
  it("should render default BlockQuote", () => {
    const wrapper = mount(<BlockQuote />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<BlockQuote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should work with all variants", () => {
    const Variants = () => (
      <div>
        <BlockQuote className="newClass" citation="cite">
          Quote
        </BlockQuote>
      </div>
    );

    const wrapper = mount(<Variants />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Variants />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
