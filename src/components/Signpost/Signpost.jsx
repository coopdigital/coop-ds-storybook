import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import "./signpost.scss";

const Signpost = ({ title, url, mediaComponent }) => {
  const rootClasses = classNames("coop-c-signpost", [
    mediaComponent && "coop-c-hero--media",
  ]);

  return (
    <>
      <div className={rootClasses}>
        <a
          href={url}
          class="coop-c-signpost__link"
          data-contenttype=""
          data-contentparent=""
          data-linktext=""
        >
          { mediaComponent && ( mediaComponent ) }

          <div class="coop-c-signpost__content">
            <h3 class="coop-c-signpost__title">{title}</h3>
            <span class="coop-c-signpost__icon" aria-hidden="true">
              <svg class="coop-c-signpost__icon__svg" viewBox="0 0 16 29">
                <path d="M1.909 28.11a1.575 1.575 0 0 1-1.115-2.691L11.713 14.5.793 3.58a1.575 1.575 0 1 1 2.23-2.228l12.033 12.033a1.575 1.575 0 0 1 0 2.229L3.023 27.647c-.307.308-.71.463-1.114.463z" />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

Signpost.defaultProps = {
  title: "Supporting communities",
  url: "http://www.coop.co.uk",
  mediaComponent: null,
  dataContentType: null,
  dataContentParent: null,
  dataLinkText: null,
};

Signpost.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  mediaComponent: PropTypes.node,
  dataContentType: PropTypes.string.isOptional,
  dataContentParent: PropTypes.string.isOptional,
  dataLinkText: PropTypes.string.isOptional,
};

export default Signpost;
