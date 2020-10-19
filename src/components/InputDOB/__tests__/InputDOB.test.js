import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import InputDOB from "../index";

describe("InputDOB", () => {
  it("should render correctly", () => {
    const wrapper = mount(<InputDOB id="test" name="test" />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer
      .create(
        <InputDOB
          id="test"
          name="test"
          label="Date of Birth"
          hint="01 01 1990"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with errors correctly", () => {
    const errors = {
      day: "The day you entered is invalid",
      month: "The month you entered is invalid",
      year: "The year you entered is invalid",
    };
    const wrapper = mount(
      <InputDOB id="test" name="test" hasError errors={errors} />
    );
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<InputDOB id="test" name="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
