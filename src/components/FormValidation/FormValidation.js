import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

const FormValidation = ({
  heading,
  message,
  errorLinks,
  hasErrors,
  children,
}) => {
  if (!hasErrors) return null;

  return (
    <div
      className="coop-c-message coop-c-message--error"
      aria-labelledby="error-message-heading"
      tabIndex="-1"
      role="alert"
    >
      <h2 id="error-message-heading" className="coop-c-message__heading">
        {heading}
      </h2>
      <p className="coop-c-message__message">{message}</p>
      <ul className="coop-c-message__list">
        {errorLinks.map(({ href, text }) => (
          <li key={shortid.generate()}>
            <a className="coop-c-message__link coop-t-link" href={href}>
              {text}
            </a>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

FormValidation.defaultProps = {
  heading: "There’s a problem",
  message: "Check the form. You must:",
  errorLinks: [],
  hasErrors: false,
  children: null,
};

FormValidation.propTypes = {
  heading: PropTypes.string,
  message: PropTypes.string,
  errorLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  hasErrors: PropTypes.bool,
  children: PropTypes.node,
};

export default FormValidation;