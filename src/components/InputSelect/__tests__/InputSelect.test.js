import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import InputSelect from "../index";

describe("InputSelect", () => {
  const options = [
    {
      value: "1",
      text: "one",
    },
    {
      value: "2",
      text: "two",
    },
  ];

  it("should render correctly", () => {
    const wrapper = mount(<InputSelect id="test" name="test" />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer
      .create(<InputSelect id="test" name="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render props correctly", () => {
    const tree = renderer
      .create(
        <InputSelect
          id="id"
          name="name"
          label="With Label and Hint"
          hint="With Label and Hint"
          hasError
          errorMsg="Error Message"
          options={options}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
