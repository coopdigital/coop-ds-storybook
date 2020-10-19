import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const GridItem = ({
  className,
  size,
  offset,
  sm,
  smOffset,
  md,
  mdOffset,
  lg,
  lgOffset,
  xlg,
  xlgOffset,
  collapse,
  children,
  ...props
}) => {
  const classes = classNames("coop-l-grid__item", [
    size && `coop-l-grid__item--${size}`,
    offset && `coop-l-grid__item--offset-${offset}`,
    sm && `coop-l-grid__item--small-${sm}`,
    smOffset && `coop-l-grid__item--small-${smOffset}`,
    md && `coop-l-grid__item--medium-${md}`,
    mdOffset && `coop-l-grid__item--medium-offset-${mdOffset}`,
    lg && `coop-l-grid__item--large-${lg}`,
    lgOffset && `coop-l-grid__item--large-offset-${lgOffset}`,
    xlg && `coop-l-grid__item--xlarge-${xlg}`,
    xlgOffset && `coop-l-grid__item--xlarge-offset-${xlgOffset}`,
    collapse && "coop-l-grid__item--collapse",
    className,
  ]);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

GridItem.defaultProps = {
  className: "",
  size: null,
  offset: null,
  sm: null,
  smOffset: null,
  md: null,
  mdOffset: null,
  lg: null,
  lgOffset: null,
  xlg: null,
  xlgOffset: null,
  collapse: false,
  children: null,
};

GridItem.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mdOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lgOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xlg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xlgOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  collapse: PropTypes.bool,
  children: PropTypes.node,
};

export default GridItem;
