import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import "./grid.scss";

const Grid = ({ className, center, reverse, children, ...props }) => (
  <div
    className={classNames("coop-l-grid", [
      center && "coop-u-flex-center",
      reverse && "coop-u-flex-row-reverse",
      className,
    ])}
    {...props}
  >
    {children}
  </div>
);

Grid.defaultProps = {
  className: "",
  center: false,
  reverse: false,
  children: null,
};

Grid.propTypes = {
  className: PropTypes.string,
  center: PropTypes.bool,
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default Grid;
