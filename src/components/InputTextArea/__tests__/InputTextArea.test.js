import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import InputTextArea from "../index";

describe("InputTextArea", () => {
  it("should render correctly", () => {
    const wrapper = mount(<InputTextArea id="test" name="test" label="test" />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should support all variants", () => {
    const Variants = () => (
      <div>
        <InputTextArea id="label" name="label" label="Input with label" />
        <InputTextArea id="label" name="label" hint="Input with hint" />
        <InputTextArea
          id="label"
          name="label"
          label="Input with label and hint"
          hint="Input with label and hint"
        />
      </div>
    );

    const tree = renderer.create(<Variants />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(<Variants />);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should support all variants with error", () => {
    const VariantsWithError = () => (
      <div>
        <InputTextArea
          id="label"
          name="label"
          label="Input with label"
          errorMsg="Error message"
          hasError
        />
        <InputTextArea
          id="label"
          name="label"
          hint="Input with hint"
          errorMsg="Error message"
          hasError
        />
        <InputTextArea
          id="label"
          name="label"
          label="Input with label and hint"
          hint="Input with label and hint"
          errorMsg="Error message"
          hasError
        />
      </div>
    );

    const tree = renderer.create(<VariantsWithError />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(<VariantsWithError />);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
