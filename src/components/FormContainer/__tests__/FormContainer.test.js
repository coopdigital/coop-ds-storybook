import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import FormContainer from "../index";

describe("FormContainer", () => {
  it("should render default FormContainer", () => {
    const wrapper = mount(<FormContainer />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<FormContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should work with props", () => {
    const onClickMock = jest.fn();
    const onSubmitMock = jest.fn();
    const WithProps = () => (
      <FormContainer
        id="test"
        className="newClass"
        onClick={() => onClickMock}
        onSubmit={() => onSubmitMock}
      >
        Form Body
      </FormContainer>
    );

    const wrapper = mount(<WithProps />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<WithProps />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
