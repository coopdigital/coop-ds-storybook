import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Signpost from "../index";
import ResponsiveImage from "../../ResponsiveImage";

const MediaComponent = () => {
  const src =
    "https://images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=png&q=60&w=600&h=338";
  const alt = "How Co-op is supporting local communities";
  const figureClass = "coop-c-signpost__media";
  const pictureClass = "coop-c-signpost__image";
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      figureClass={figureClass}
      pictureClass={pictureClass}
    />
  );
};

describe("Signpost", () => {
  it("should render correctly", () => {
    const wrapper = mount(<Signpost title="Sigpost title" url="#" />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Signpost title="Sigpost title" url="#" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //it should take a child component as mediacomponent without error
	it("should take a child component as mediacomponent", () => {
		const wrapper = mount(<Signpost title="Sigpost title" url="#" mediaComponent={<MediaComponent/>}/>);

		const tree = renderer.create(<Signpost />).toJSON();
    expect(tree).toMatchSnapshot();
	})

  //it should render the ImageComponent is used

  //it should carry a link

  //it should error without link or title
});
