import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Hero from "../index";

describe("Hero", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Hero title="Title" content="Content description" />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer
      .create(<Hero title="Title" content="Content description" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should allow squircleBg attribute", () => {
    const tree = renderer
      .create(<Hero title="title" content="content" squircleBg />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should allow children and allow pullContent attribute", () => {
    const tree = renderer
      .create(
        <Hero title="title" content="content" pullContent>
          test
        </Hero>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should allow cta and media components", () => {
    const tree = renderer
      .create(
        <Hero
          title="title"
          content="content"
          pullContent
          ctaComponent={<button>button</button>}
          mediaComponent={<div>imageplaceholder</div>}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
