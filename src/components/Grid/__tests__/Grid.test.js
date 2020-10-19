import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Grid from "../index";

describe("Grid", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Grid />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Grid />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should allow center and reverse attributes", () => {
    const Attributes = () => (
      <>
        <Grid center />
        <Grid reverse />
        <Grid center reverse />
      </>
    );
    const tree = renderer.create(<Attributes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with children", () => {
    const tree = renderer.create(<Grid>test</Grid>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
