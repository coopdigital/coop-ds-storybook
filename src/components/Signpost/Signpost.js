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
          {mediaComponent && (
            <figure class="coop-c-signpost__media">
              <picture class="coop-c-signpost__image">
                <source
                  media="(min-width: 48em)"
                  srcset="//images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=webp&amp;fit=thumb&amp;q=60&amp;w=360&amp;h=203 1x,
        //images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=webp&amp;fit=thumb&amp;q=60&amp;w=720&amp;h=406 2x"
                  type="image/webp"
                />
                <source
                  media="(min-width: 37.5em)"
                  srcset="//images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=webp&amp;fit=thumb&amp;q=60&amp;w=751&amp;h=423 1x,
        //images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=webp&amp;fit=thumb&amp;q=60&amp;w=1502&amp;h=846 2x"
                  type="image/webp"
                />
                <source
                  media="(min-width: 25.9375em)"
                  srcset="//images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=webp&amp;fit=thumb&amp;q=60&amp;w=583&amp;h=329 1x,
        //images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=webp&amp;fit=thumb&amp;q=60&amp;w=1166&amp;h=658 2x"
                  type="image/webp"
                />
                <source
                  media="(min-width: 48em)"
                  srcset="//images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=jpg&amp;fit=thumb&amp;fl=progressive&amp;q=60&amp;w=360&amp;h=203 1x,
        //images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=jpg&amp;fit=thumb&amp;fl=progressive&amp;q=60&amp;w=720&amp;h=406 2x"
                  type="image/jpeg"
                />
                <source
                  media="(min-width: 37.5em)"
                  srcset="//images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=jpg&amp;fit=thumb&amp;fl=progressive&amp;q=60&amp;w=751&amp;h=423 1x,
        //images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=jpg&amp;fit=thumb&amp;fl=progressive&amp;q=60&amp;w=1502&amp;h=846 2x"
                  type="image/jpeg"
                />
                <source
                  media="(min-width: 25.9375em)"
                  srcset="//images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=jpg&amp;fit=thumb&amp;fl=progressive&amp;q=60&amp;w=583&amp;h=329 1x,
        //images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=jpg&amp;fit=thumb&amp;fl=progressive&amp;q=60&amp;w=1166&amp;h=658 2x"
                  type="image/jpeg"
                />
                <img
                  src="//images.ctfassets.net/bffxiku554r1/4wuuKMjqUbsIJL7gl65A7I/3ebd189f497edaf54091615e67203910/Memb.png?fm=jpg&amp;fit=thumb&amp;q=60&amp;w=751&amp;h=423"
                  alt="Membership"
                />
              </picture>
            </figure>
          )}
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
  title: null,
  url: null,
  mediaComponent: null,
};

Signpost.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  mediaComponent: PropTypes.string.node,
};

export default Signpost;
