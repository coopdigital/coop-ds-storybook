import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import "./hero.scss";

const Hero = ({
  title,
  content,
  squircleBg,
  pullContent,
  ctaComponent,
  mediaComponent,
  children,
}) => {
  const rootClasses = classNames("coop-c-hero", [
    squircleBg && "coop-c-hero--squircle",
    mediaComponent && "coop-c-hero--media",
    pullContent && "coop-c-hero--pull",
  ]);

  return (
    <>
      <div className={rootClasses}>
        <div className="coop-c-hero__inner">
          <h1 className="coop-c-hero__title">{title}</h1>
          {mediaComponent && (
            <div className="coop-c-hero__media">{mediaComponent}</div>
          )}
          <div className="coop-c-hero__body">
            <p>{content}</p>
            {ctaComponent && (
              <div className="coop-c-hero__link">{ctaComponent}</div>
            )}
          </div>

          {squircleBg && (
            <div className="coop-c-hero__squircle" aria-hidden="true">
              <div className="coop-c-hero__squircle__inner">
                <svg
                  className="coop-c-hero__squircle__svg"
                  viewBox="0 0 1802 1726"
                >
                  <path
                    className="coop-c-hero__squircle__path"
                    d="M1743 446.3c-49.7-167.6-173.7-299.6-339.6-362C1079.6-28.2 724.1-28.2 397 84.9 232.6 146.7 109.2 278.6 58.5 446.8 19.7 581.6 0 721.4 0 862.8s19.7 281.2 58.5 416.5c50.8 167.6 174.2 299.6 339.6 362 162.2 56.2 331.5 84.7 502.9 84.7 172 0 341.3-28.4 504-85.2 164.9-62.4 288.3-193.8 338-362 39.4-135.8 59-275.6 59-416s-19.7-280.6-59-416.5z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="coop-c-hero__outer">{children}</div>
    </>
  );
};

Hero.defaultProps = {
  squircleBg: false,
  pullContent: false,
  ctaComponent: null,
  mediaComponent: null,
  children: null,
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  squircleBg: PropTypes.bool,
  pullContent: PropTypes.bool,
  ctaComponent: PropTypes.node,
  mediaComponent: PropTypes.node,
  children: PropTypes.node,
};

export default Hero;
