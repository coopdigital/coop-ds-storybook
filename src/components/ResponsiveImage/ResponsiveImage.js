import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import "./responsiveImage.scss";

const generateSourceMap = (sources) =>
  sources.map((source) => {
    const { type, media, srcSet } = source;
    const srcSets = Object.entries(srcSet).reduce(
      (acc, [descriptor, imgSrc]) => {
        acc.push(`${imgSrc} ${descriptor}`);
        return acc;
      },
      []
    );

    const sourceProps = { type, media };
    return (
      <source
        key={shortid.generate()}
        srcSet={srcSets.join(", ")}
        {...sourceProps}
      />
    );
  });

const ResponsiveImage = ({ src, alt, width, height, sources }) => {
  return (
    <figure className="coop-c-image">
      <picture className="coop-c-image__media">
        {generateSourceMap(sources)}
        <img src={src} alt={alt} width={width} height={height} />
      </picture>
    </figure>
  );
};

ResponsiveImage.defaultProps = {
  width: null,
  height: null,
  sources: [],
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sources: PropTypes.arrayOf(PropTypes.object),
};

export default ResponsiveImage;
