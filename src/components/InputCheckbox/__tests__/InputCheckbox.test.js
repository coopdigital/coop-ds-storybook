import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import InputCheckbox from "../index";

describe("InputCheckbox", () => {
  it("should render correctly", () => {
    const wrapper = mount(
      <InputCheckbox id="test" name="test" label="test" value={1} />
    );
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer
      .create(<InputCheckbox id="test" name="test" label="test" value={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
