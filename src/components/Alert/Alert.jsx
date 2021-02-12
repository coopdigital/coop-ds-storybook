import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import "./alert.scss";

const Alert = ({ type, heading, link, children }) => {
  const { href, text } = link;
  const classes = classNames("coop-c-notification", [
    type === "warn" && "coop-c-notification--alert",
  ]);

  return (
    <div className={classes} role="status">
      <h3 className="coop-c-notification__heading">{heading}</h3>
      <p className="coop-c-notification__p">
        {href && (
          <a href={href} className="coop-c-notification__link">
            {text}
          </a>
        )}
      </p>
      {children && <p className="coop-c-notification__p">{children}</p>}
    </div>
  );
};

Alert.defaultProps = {
  type: "info",
  link: {
    href: "",
    text: "",
  },
  children: null,
};

Alert.propTypes = {
  type: PropTypes.oneOf(["info", "warn"]),
  heading: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default Alert;
