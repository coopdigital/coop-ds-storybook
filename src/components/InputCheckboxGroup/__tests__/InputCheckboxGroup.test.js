import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import InputCheckboxGroup from "../index";
import InputCheckbox from "../../InputCheckbox";

describe("InputCheckboxGroup", () => {
  it("should render correctly", () => {
    const wrapper = mount(
      <InputCheckboxGroup
        id="group-1"
        legend="Checkbox Group with hint"
        hint="Hint message"
      />
    );
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should support hints and errors", () => {
    const All = () => (
      <div>
        <InputCheckboxGroup
          id="group-1"
          legend="Checkbox Group with hint"
          hint="Hint message"
        >
          <InputCheckbox
            id="checkbox-1"
            name="checkbox-1"
            label="Checkbox 1"
            value={1}
          />
          <InputCheckbox
            id="checkbox-2"
            name="checkbox-2"
            label="Checkbox 2"
            value={2}
          />
          <InputCheckbox
            id="checkbox-3"
            name="checkbox-3"
            label="Checkbox 3"
            value={3}
          />
        </InputCheckboxGroup>
        <InputCheckboxGroup
          id="group-2"
          legend="Checkbox Group with hint and error"
          hint="Hint message"
          errorMsg="Error message"
          hasError
        >
          <InputCheckbox
            id="checkbox-4"
            name="checkbox-4"
            label="Checkbox 4"
            value={4}
          />
          <InputCheckbox
            id="checkbox-5"
            name="checkbox-5"
            label="Checkbox 5"
            value={5}
          />
          <InputCheckbox
            id="checkbox-6"
            name="checkbox-6"
            label="Checkbox 6"
            value={6}
          />
        </InputCheckboxGroup>
      </div>
    );

    const tree = renderer.create(<All />).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(<All />);
    expect(() => wrapper.unmount()).not.toThrow();
  });
});
