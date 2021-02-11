import React from "react";
import PropTypes from "prop-types";
import "./list.scss";
import shortid from "shortid";

const List = ({ type, items }) => {
  const typeMap = {
    bullet: "ul",
    numbered: "ol",
  };
  const Tag = typeMap[type];

  return (
    <Tag>
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
  class: "",
  items: [],
};

List.propTypes = {
  /** type - Needs to be one of either `bullet` for `ul` or `numbered` for `ol` list types */
  type: PropTypes.oneOf(["bullet", "numbered"]),
  /** class - Utilities that can be used with lists */
  class: PropTypes.oneOf(["coop-u-list-bare", "coop-u-list-inline"]),
  /** items - An array of items to populate the list with list items  */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node,
    })
  ),
};

export default List;
