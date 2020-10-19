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
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  hint: PropTypes.string,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onChange: PropTypes.func,
};
