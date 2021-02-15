import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import classNames from "../../utils/classNames";
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

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  sources,
  className,
  figureClass,
  pictureClass,
  imageClass }) => {

  const figureClasses = classNames("coop-c-image", [
    figureClass && figureClass,
    className,
  ]);
  const pictureClasses = classNames("coop-c-image__media", [
    pictureClass && pictureClass,
    className,
  ]);
  const imageClasses = classNames(null, [
    imageClass && imageClass,
    className,
  ]);

  return (
    <figure className={figureClasses}>
      <picture className={pictureClasses}>
        {generateSourceMap(sources)}
        <img
          className={imageClasses}
          src={src}
          alt={alt}
          width={width}
          height={height} />
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
  /** src - (required) a url to the image you are sourcing. */
  src: PropTypes.string.isRequired,
  /** alt - (required) needed to give a meaningful description to screenreader users. */
  alt: PropTypes.string.isRequired,
  /** width - can set the width of the image in pixels */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** height - can set the height of the image in pixels */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** source - takes an array of objects with the following properties: `type`, `media` and `srcSet` */
  sources: PropTypes.arrayOf(PropTypes.object),
  /** figureClass - allows you to override|add additional classes to target the `<figure>` tag within the component  */
  figureClass: PropTypes.string,
  /** pictureClass - allows you to override|add additional classes to target the `<picture>` tag within the component */
  pictureClass: PropTypes.string,
  /** imageClass - - allows you to override|add additional classes to target the `<img>` tag within the component */
  imageClass: PropTypes.string
};

export default ResponsiveImage;
