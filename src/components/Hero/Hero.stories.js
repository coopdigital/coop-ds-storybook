import React from "react";
import Hero from "./Hero";
import ResponsiveImage from "../ResponsiveImage";

export default {
  title: "Base/Hero",
  component: Hero,
};

const heroTitle = "Supporting communities";
const content = `Find out what community and the power of local people means to Co-op. 
You'll discover the great things we can achieve when we work together to create a better society.`;

export const Basic = (args) => <Hero {...args} />;
Basic.args = {
  title: heroTitle,
  content,
  squircleBg: true,
};

const LinkButton = () => (
  <a href="http://google.com">More about how Co-op is supporting communities</a>
);
export const WithLinkCTA = () => (
  <Hero
    title={heroTitle}
    content={content}
    ctaComponent={<LinkButton />}
    squircleBg
  />
);

const Button = () => (
  <a href="https://coop.co.uk" className="coop-btn coop-btn--primary">
    Find out how you can help
  </a>
);
export const WithButtonCTA = () => (
  <Hero
    title={heroTitle}
    content={content}
    ctaComponent={<Button />}
    squircleBg
  />
);

const MediaComponent = () => {
  const src =
    "https://images.ctfassets.net/bffxiku554r1/7XDwxNP8ioupeMdJZxNS8/d23d2b802d6be0ecbcb7abd1ff33b159/coop-supporting-local-communities.png?fm=png&q=60&w=600&h=338";
  const alt = "How Co-op is supporting local communities";
  return <ResponsiveImage src={src} alt={alt} />;
};
export const WithMedia = () => (
  <Hero
    title={heroTitle}
    content={content}
    mediaComponent={<MediaComponent />}
    squircleBg
  />
);

export const WithMediaAndCTA = () => (
  <Hero
    title={heroTitle}
    content={content}
    ctaComponent={<Button />}
    mediaComponent={<MediaComponent />}
    squircleBg
  />
);
