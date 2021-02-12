import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import "./text.scss";

const variantList = {
  mega: "coop-t-h-mega",
  lead: "coop-t-lead-p",
  regular: "coop-t-regular",
  medium: "coop-t-medium",
  bold: "coop-t-bold",
};

const Text = ({ className, variant, type, children, ...props }) => {
  const TagName = type;
  const variantClassName = classNames(variantList[variant], [className]);

  const tagAttributes = {
    className: variantClassName,
    ...props,
  };

  return <TagName {...tagAttributes}>{children}</TagName>;
};

Text.defaultProps = {
  type: "p",
  variant: "regular",
  className: null,
  children: null,
};

Text.propTypes = {
  /** className -  */
  className: PropTypes.string,
  /** variant - adds class variants to the text component. Variant props listed and the corresponding class name they use are:

  - `mega: "coop-t-h-mega"`,
  - `lead: "coop-t-lead-p"`,
  - `regular: "coop-t-regular"`,
  - `medium: "coop-t-medium"`,
  - `bold: "coop-t-bold"`,
   */

  variant: PropTypes.oneOf(Object.keys(variantList)),
  /** type -  the type of text element you want to render using the Text component. Includes:
   * `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, and `p` tags.
  */
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
  /** children - prop that accepts a string or node? */
  children: PropTypes.node,
};

export default Text;
