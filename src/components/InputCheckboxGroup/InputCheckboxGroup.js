import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CheckboxContext } from "./InputCheckboxGroupContext";
import "./inputCheckboxGroup.scss";
import classNames from "../../utils/classNames";

const InputCheckboxGroup = ({
  id,
  legend,
  hint,
  hasError,
  errorMsg,
  className,
  value,
  children,
  onChange,
  ...props
}) => {
  const [selfVal, setSelfVal] = useState(value);

  const updateState = (val, checked) => {
    const removed = selfVal.filter((v) => v !== val);
    const next = checked ? [...removed, val] : removed;
    setSelfVal(next);
    if (onChange) onChange(next);
  };

  useEffect(() => {
    setSelfVal(value);
  }, [value.join(",")]);

  const providerValue = {
    updateState,
    values: selfVal,
    inGroup: true,
  };

  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const classes = classNames("coop-c-form-choice", [
    hasError && "coop-form__invalid",
    className,
  ]);

  const ariaDescribedBy = [];
  if (hint) ariaDescribedBy.push(hintId);
  if (hasError) ariaDescribedBy.push(errorId);

  return (
    <CheckboxContext.Provider value={providerValue}>
      <div className="coop-form__row">
        <fieldset
          className={classes}
          aria-describedby={ariaDescribedBy && ariaDescribedBy.join(" ")}
          {...props}
        >
          <legend className="coop-form__legend coop-c-form-choice__legend">
            {legend}
          </legend>
          {hint && (
            <p id={`${id}-hint`} className="coop-form__hint">
              {hint}
            </p>
          )}
          {hasError && (
            <p id={`${id}-error`} className="coop-form__error">
              {errorMsg}
            </p>
          )}
          {children}
        </fieldset>
      </div>
    </CheckboxContext.Provider>
  );
};

export default InputCheckboxGroup;

InputCheckboxGroup.defaultProps = {
  hasError: false,
  hint: null,
  errorMsg: null,
  children: null,
  className: null,
  value: [],
  onChange: null,
};

InputCheckboxGroup.propTypes = {
  /** id - (required) so we can target areas of the form for processing */
  id: PropTypes.string.isRequired,
  /** legend - (required) to describe the block or group of checkboxes */
  legend: PropTypes.string.isRequired,
  /** hint - (optional) can be used to help guide users in filling in areas of a form. */
  hint: PropTypes.string,
  /** hasError - (optional/state managed?) this would trigger on the element when an error state occurs.
   * Requires state management to set this */
  hasError: PropTypes.bool,
  /** errorMsg - (optional) shows the user an error message when an error occurs in filling out a form or form processing. */
  errorMsg: PropTypes.string,
  /** children - takes a list of InputCheckbox components. */
  children: PropTypes.node,
  /** className - (optional) - optional and is used to add more styling to the checkbox group if required in your project.*/
  className: PropTypes.string,
  /** ?? would a checkbox group ever hold a value?? */
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  /** Do we need to onChange at this level? Would this trigger when child checkbox error state changes? */
  onChange: PropTypes.func,
};
