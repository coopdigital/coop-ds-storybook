import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import "./list.scss";
import shortid from "shortid";

const List = ({ className, type, items, bare, inline }) => {

  const typeMap = {
    bullet: "ul",
    numbered: "ol",
  };
  const Tag = typeMap[type];

  const rootClasses = classNames('',[
    bare && "coop-u-list-bare",
    inline && "coop-u-list-inline",
    className,
  ]);


  return (
    <Tag className={rootClasses}>
      {items.map(({ content, ...props }, index) => (
        <li key={shortid.generate()} {...props}>
          {content}
        </li>
      ))}
    </Tag>
  );
};

List.defaultProps = {
  type: "bullet",
  items: [],
  bare: false,
  inline: false,
  className: null,
};

List.propTypes = {
  /** type - Needs to be one of either `bullet` for `ul` or `numbered` for `ol` list types */
  type: PropTypes.oneOf(["bullet", "numbered"]),
  /** className - optional and is used to add more styling to the list if required in your project.*/
  className: PropTypes.string,
  /** bare - optional. Used to add the `coop-u-list-bare` class to the list */
  bare: PropTypes.bool,
  /** bare - optional. Used to add the `coop-u-list-inline` class to the list */
  inline: PropTypes.bool,
  /** items - An array of items to populate the list with list items  */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node,
    })
  ),
};

export default List;
