import React from "react";
import MembershipBanner from "./MembershipBanner";

export default {
  title: "Base/MembershipBanner",
  component: MembershipBanner,
};

const btn = {
  href: "https://membership.coop.co.uk/register",
  text: "Become a Co-op Member",
};

const links = [
  {
    href: "https://membership.coop.co.uk/claim-rewards",
    text: "Add a missed receipt",
  },
  {
    href: "https://membership.coop.co.uk",
    text: "Get a replacement card",
  },
  {
    href: "https://membership.coop.co.uk/details",
    text: "Change your details",
  },
  {
    href: "https://membership.coop.co.uk",
    text: "About Co-op Membership",
  },
];

export const Basic = (args) => <MembershipBanner {...args} />;
Basic.args = {};

export const WithButton = () => <MembershipBanner btn={btn} />;

export const WithLinks = () => <MembershipBanner links={links} />;

export const WithButtonAndLinks = () => (
  <MembershipBanner btn={btn} links={links} />
);
