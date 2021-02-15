import React from "react";
import PropTypes from "prop-types";
// import sanitizeHtml from "../../utils/sanitizeHtml";
import classNames from "../../utils/classNames";

// import Img from "../components/Img";
import "@coopdigital/shared-component--editorialcard/dist/editorialCard.css";
import "./editorialcard.css";

const EditorialCard = ({
  title,
  subtitle,
  content,
  link,
  mediaComponent,
  horizontal,
  horizontalOnTablet,
  className,
}) => {
  const classes = classNames("coop-c-editorialcard", [
    horizontal && `coop-c-editorialcard--horizontal`,
    horizontalOnTablet && `coop-c-editorialcard--horizontalOnTablet`,
    className,
  ]);
  return (
    <article className={classes}>
      <a
        href={link}
        className="coop-c-editorialcard__link"
        data-contenttype="Card|Editorial"
        data-contentparent=""
        data-linktext=""
      >
        <div className="coop-c-editorialcard__inner">
          {mediaComponent && (
            <div className="coop-c-editorialcard__media">
              {mediaComponent}
            </div>
          )}

          <div className="coop-c-editorialcard__content">
            <header className="coop-c-editorialcard__header">
              {subtitle && (
                <p className="coop-c-editorialcard__subtitle">{subtitle}</p>
              )}
              {title && (
                <h3 className="coop-c-editorialcard__title">
                  <span>{title}</span>
                </h3>
              )}
            </header>
            {content && (
              <div className="coop-c-editorialcard__body" dangerouslySetInnerHTML={{ __html: content }}/>
            )}
          </div>
        </div>
      </a>
    </article>
  );
};

EditorialCard.defaultProps = {
  subtitle: null,
};

EditorialCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  /** mediaComponent - is optional and usually take an image in form of a ResponsiveImage react component */
  mediaComponent: PropTypes.node,
};

export default EditorialCard;
