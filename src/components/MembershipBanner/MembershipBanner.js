import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import "./membershipBanner.scss";

const MembershipBanner = ({ title, body, btn, links }) => {
  return (
    <aside className="coop-c-membershipmodule">
      <div className="coop-c-membershipmodule__inner coop-u-clearfix">
        <article className="coop-c-membershipmodule__content">
          <header className="coop-c-membershipmodule__header">
            <h3 className="coop-c-membershipmodule__title">{title}</h3>
          </header>
          <div className="coop-c-membershipmodule__body">{body}</div>
          {btn && (
            <div className="coop-c-membershipmodule__btns">
              <p>
                <a
                  href={btn.href}
                  className="coop-btn coop-btn--primary"
                  data-contenttype="Membership module"
                  data-contentparent="Become a member"
                  data-linktext={btn.text}
                >
                  {btn.text}
                </a>
              </p>
            </div>
          )}
          {links && (
            <div className="coop-c-membershipmodule__links">
              <ul className="coop-c-membershipmodule__list">
                {links.map(({ href, text }) => {
                  return (
                    <li
                      key={shortid.generate()}
                      className="coop-c-membershipmodule__item"
                    >
                      <a
                        className="coop-c-membershipmodule__link"
                        href={href}
                        data-contenttype="Membership module"
                        data-contentparent="Become a member"
                        data-linktext={text}
                      >
                        {text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </article>

        <div className="coop-c-membershipmodule__media">
          <svg
            className="coop-c-membershipmodule__graphic"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 224"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className="coop-c-membershipmodule__card"
              d="M145 224H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h140c2.76 0 5 2.24 5 5v214c0 2.76-2.24 5-5 5z"
            />
            <path
              className="coop-c-membershipmodule__logo"
              d="M122.24 34.91c-1.36-4.34-4.62-7.87-8.82-9.5a39.794 39.794 0 00-26.34 0c-4.34 1.63-7.6 5.16-8.82 9.5a40.272 40.272 0 000 21.99c1.36 4.34 4.62 7.87 8.82 9.5 4.21 1.49 8.69 2.31 13.17 2.17 4.48 0 8.96-.81 13.17-2.17 4.34-1.63 7.6-5.16 8.82-9.5.95-3.67 1.49-7.33 1.49-11s-.54-7.33-1.49-10.99zM108.67 51.2c-.68 2.31-2.72 4.07-5.16 4.62-2.31.41-4.62.41-6.79 0-2.44-.41-4.34-2.17-5.16-4.62a17.98 17.98 0 010-10.72c.68-2.31 2.72-4.07 5.16-4.62 2.31-.41 4.62-.41 6.79 0 2.44.41 4.34 2.17 5.16 4.62.54 1.76.81 3.67.81 5.43s-.27 3.66-.81 5.29zM71.61 83.64c-1.36-4.34-4.62-7.87-8.82-9.5a39.794 39.794 0 00-26.34 0c-4.34 1.63-7.6 5.16-8.82 9.5a40.272 40.272 0 000 21.99c1.36 4.34 4.62 7.87 8.82 9.5a39.794 39.794 0 0026.34 0c4.21-1.49 7.6-5.02 8.82-9.5a40.462 40.462 0 000-21.99zm-13.58 16.43c-.68 2.31-2.72 4.07-5.16 4.62-2.31.41-4.62.41-6.79 0-2.44-.41-4.34-2.17-5.16-4.62a17.98 17.98 0 010-10.72c.68-2.31 2.72-4.07 5.16-4.62 2.31-.41 4.62-.41 6.79 0 2.44.41 4.34 2.17 5.16 4.62.54 1.76.81 3.53.81 5.43.01 1.76-.27 3.66-.81 5.29zm.82-54.3H73.1c0-3.67-.54-7.33-1.49-10.86-1.36-4.34-4.62-7.87-8.82-9.5a39.794 39.794 0 00-26.34 0c-4.34 1.63-7.6 5.16-8.82 9.5a40.272 40.272 0 000 21.99c1.36 4.34 4.62 7.87 8.82 9.5 4.21 1.49 8.69 2.17 13.17 2.17s8.96-.81 13.17-2.17c4.34-1.63 7.6-5.16 8.82-9.5.14-.54.27-1.22.54-1.9l-13.44-6.24c-.14.81-.27 1.63-.54 2.44-.68 2.31-2.72 4.07-5.16 4.62-2.31.41-4.62.41-6.79 0-2.44-.41-4.34-2.17-5.16-4.62a17.98 17.98 0 010-10.72c.68-2.31 2.72-4.07 5.16-4.62 2.31-.41 4.62-.41 6.79 0 2.44.41 4.34 2.17 5.16 4.62.4 1.76.68 3.52.68 5.29m19.14 37.6c-.95 3.53-1.49 7.19-1.49 11v32.17h14.25V94.37c0-1.76.27-3.67.81-5.29.68-2.31 2.72-4.07 5.16-4.62 2.31-.41 4.62-.41 6.79 0 2.44.41 4.34 2.17 5.16 4.62a17.98 17.98 0 010 10.72c-.68 2.31-2.72 4.07-5.02 4.62-2.31.41-4.62.41-6.79 0-.41-.14-.95-.27-1.36-.41l4.89 13.3c4.48 0 8.96-.81 13.17-2.17 4.34-1.63 7.6-5.16 8.82-9.5 2.04-7.19 2.04-14.8 0-21.99-1.36-4.34-4.62-7.87-8.82-9.5a39.794 39.794 0 00-26.34 0c-4.62 1.35-7.88 4.88-9.23 9.22"
            />
          </svg>

          <div className="coop-c-membershipmodule__connector">
            <svg
              className="coop-c-membershipmodule__svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 288 304"
              aria-hidden="true"
              focusable="false"
            >
              <path
                className="coop-c-membershipmodule__path"
                d="M0 4h72c39.76 0 72 32.24 72 72v152c0 39.77 32.24 72 72 72h72"
                strokeWidth="8"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
};

MembershipBanner.defaultProps = {
  title: "Co-op membership",
  body: "Choose your offers, check your balance and help your community",
  btn: null,
  links: [],
};

MembershipBanner.propTypes = {
  title: PropTypes.string,
  body: PropTypes.node,
  btn: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default MembershipBanner;
