import React from "react";
import ResponsiveImage from "./ResponsiveImage";

// export default {
//   title: "Base/ResponsiveImage",
//   component: ResponsiveImage,
// };

const src =
  "https://images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=png&q=60&w=600&h=338";
const alt = "How Co-op is supporting local communities";
export const Basic = (args) => <ResponsiveImage {...args} />;
Basic.args = {
  src,
  alt,
};

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
export const WithSources = () => (
  <ResponsiveImage src={src} alt={alt} sources={sourcesTest} />
);
