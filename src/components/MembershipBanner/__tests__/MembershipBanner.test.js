import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import MembershipBanner from "../index";

describe("MembershipBanner", () => {
  it("should render correctly", () => {
    const wrapper = mount(<MembershipBanner />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<MembershipBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with btn", () => {
    const btn = {
      href: "https://membership.coop.co.uk/register",
      text: "Become a Co-op Member",
    };

    const tree = renderer
      .create(<MembershipBanner title="title" body="body" btn={btn} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with links", () => {
    const links = [
      {
        href: "https://membership.coop.co.uk/claim-rewards",
        text: "Add a missed receipt",
      },
      {
        href: "https://membership.coop.co.uk",
        text: "Get a replacement card",
      },
    ];
    const tree = renderer
      .create(<MembershipBanner title="title" body="body" links={links} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
