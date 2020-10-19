import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import ResponsiveImage from "../index";

describe("ResponsiveImage", () => {
  it("should render correctly", () => {
    const wrapper = mount(<ResponsiveImage src="src" alt="alt" />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer
      .create(<ResponsiveImage src="src" alt="alt" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should allow width and height attributes on default src", () => {
    const tree = renderer
      .create(<ResponsiveImage src="src" alt="alt" width="120" height="120" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render sources", () => {
    const sourcesTest = [
      {
        type: "image/webp",
        media: "(min-width: 1200)",
        srcSet: {
          "1x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=600&amp;h=338",
          "2x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=600&amp;h=338",
        },
      },
      {
        type: "image/webp",
        media: "(min-width: 600)",
        srcSet: {
          "1x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=600&amp;h=338",
          "2x":
            "//images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=webp&amp;q=60&amp;w=600&amp;h=338",
        },
      },
    ];
    const tree = renderer
      .create(<ResponsiveImage src="src" alt="alt" sources={sourcesTest} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
