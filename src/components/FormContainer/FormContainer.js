import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const FormContainer = ({ className, children, ...props }) => (
  <form className={classNames("coop-form", [className])} {...props}>
    {children}
  </form>
);

FormContainer.defaultProps = {
  className: null,
  children: null,
};

FormContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FormContainer;
