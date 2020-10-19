import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import GridItem from "../index";

describe("GridItem", () => {
  it("should render correctly", () => {
    const wrapper = mount(<GridItem />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<GridItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should allow size and offset attributes", () => {
    const SizesAndOffsets = () => (
      <>
        <GridItem size={6} />
        <GridItem offset={2} />
        <GridItem sm={6} />
        <GridItem smOffset={2} />
        <GridItem md={6} />
        <GridItem mdOffset={2} />
        <GridItem lg={6} />
        <GridItem lgOffset={2} />
        <GridItem xlg={6} />
        <GridItem xlgOffset={2} />
        <GridItem
          size={6}
          offset={4}
          sm={5}
          smOffset={3}
          md={4}
          mdOffset={2}
          lg={3}
          lgOffset={1}
          xlg={2}
          xlgOffset={1}
        />
      </>
    );
    const tree = renderer.create(<SizesAndOffsets />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should allow collapse attribute", () => {
    const Collapse = () => (
      <>
        <GridItem collapse />
      </>
    );
    const tree = renderer.create(<Collapse />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should allow children", () => {
    const tree = renderer.create(<GridItem>test</GridItem>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
