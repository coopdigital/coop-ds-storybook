import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { graphql } from "gatsby";

import EditorialCard from "../EditorialCard";

//mock data

describe("Editorial Card test", () => {
  it("renders correctly", () => {
    const component = render(
      <EditorialCard
        title="Editorialcard title"
        link="#"
        content="content test"
      />
    );
    expect(component).toMatchSnapshot();
  });

  // it should render as horizontal css with horizontal prop added
  it("should render as horizontal css with horizontal prop added", () => {
    const { container } = render(
      <EditorialCard
        horizontal
        title="Editorial card horizontal"
        link="#"
        content="content test"
      />
    );
    expect(container.firstChild).toHaveClass(
      "coop-c-editorialcard--horizontal"
    );
    // expect(container).toMatchSnapshot();
  });

  // it should allow further className extenstions
  it("should allow further className extenstions", () => {
    const { container } = render(
      <EditorialCard
        title="Editorial card"
        link="#"
        content="content test"
        className="test-classname test-classname--1"
      />
    );
    expect(container.firstChild).toHaveClass("test-classname");
    expect(container.firstChild).toHaveClass("test-classname--1");
  });

  //it should add relevant class when horizontal-at-md prop is added
  it("should add relevant class when horizontal-at-md prop is added", () => {
    const { container } = render(
      <EditorialCard
        horizontalOnTablet
        title="Editorial card horizontal"
        link="#"
        content="content test"
      />
    );

    expect(container.firstChild).toHaveClass(
      "coop-c-editorialcard--horizontalOnTablet"
    );
  });

  // test gatsby-image <Img/> component??

  // it should render with image when prop has value
  // it should render without error when no image is supplied

  // test gatsby <Link/>
  // it should error when no link is supplied
});
