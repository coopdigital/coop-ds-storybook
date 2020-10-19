import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import InputRadio from "../index";

describe("InputRadio", () => {
  it("should render correctly", () => {
    const wrapper = mount(
      <InputRadio id="test" name="test" label="test" value={1} />
    );
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer
      .create(<InputRadio id="test" name="test" label="test" value={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
