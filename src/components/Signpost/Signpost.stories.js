import React from "react";
import Signpost from "./Signpost";
import ResponsiveImage from "../ResponsiveImage";

export default {
  title: "Base/Signpost",
  component: Signpost,
};

const linkTitle = "Supporting communities";
const url = `http://www.coop.co.uk`;

export const Basic = (args) => <Signpost {...args} />;
Basic.args = {
  title: linkTitle,
  url,
};

const MediaComponent = () => {
  const src =
    "https://images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=png&q=60&w=600&h=338";
  const alt = "This is the alt text";
  return <ResponsiveImage src={src} alt={alt} />;
};
export const WithMedia = () => (
  <Signpost title={linkTitle} url={url} mediaComponent={<MediaComponent />} />
);
