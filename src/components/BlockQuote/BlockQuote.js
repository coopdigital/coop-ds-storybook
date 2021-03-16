import React from "react";
import PropTypes from "prop-types";
import "./blockQuote.scss";

const BlockQuote = ({ className, citation, children }) => {
  return (
    <blockquote>
      <p className={className}>{children}</p>
      <cite>{citation}</cite>
    </blockquote>
  );
};

BlockQuote.defaultProps = {
  className: null,
  citation: null,
  children: null,
};

BlockQuote.propTypes = {
  className: PropTypes.string,
  citation: PropTypes.string,
  children: PropTypes.node,
};

export default BlockQuote;
