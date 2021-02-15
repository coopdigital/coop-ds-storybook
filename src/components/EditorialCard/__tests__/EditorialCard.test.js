import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditorialCard from "../EditorialCard";
import ResponsiveImage from "../../ResponsiveImage";

const MediaComponent = () => {
  const src =
    "https://images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=png&q=60&w=600&h=338";
  const alt = "How Co-op is supporting local communities";
  const figureClass = 'coop-c-editorialcard__media';
  const pictureClass = 'coop-c-editorialcard__image';
  return <ResponsiveImage src={src} alt={alt} figureClass={figureClass} pictureClass={pictureClass} />;
};


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

  // it should render with image when prop has value
  it("it should render with image when prop has value", () => {
    const { container } = render(
      <EditorialCard
        title="Editorial card horizontal"
        link="#"
        content="content test"
        mediaComponent={<MediaComponent/>}
      />
    );
    const image = container.querySelector('.coop-c-image')
    expect(image).toHaveClass(
      "coop-c-image"
    );
  });

  // it should render without error when no image is supplied
  it("it should render without error when no image is supplied", () => {
    const { container } = render(
      <EditorialCard
        title="Editorial card horizontal"
        link="#"
        content="content test"
      />
    );
    const image = container.querySelector('.coop-c-image')
    expect(image).toBeNull();
    expect(container.firstChild).toHaveClass(
      "coop-c-editorialcard"
    );
  });
  // it should error when no link is supplied

  //Accessibility tests
});
