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
  /** Add a class name from your own css or any loaded coop utility classes */
  className: PropTypes.string,
  /** centers the grid on the page */
  center: PropTypes.bool,
  /** reverses the grid order */
  reverse: PropTypes.bool,
  /** Grid components take children node elements.
   * GridItem should be a direct child of a grid */
  children: PropTypes.node,
};

export default Grid;
