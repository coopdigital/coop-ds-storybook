import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { RadioContext } from "./InputRadioGroupContext";
import "./inputRadioGroup.scss";

const InputRadioGroup = ({
  id,
  legend,
  hint,
  hasError,
  errorMsg,
  className,
  initialValue,
  value,
  children,
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState(initialValue);

  const updateState = (nextValue) => {
    setChecked(nextValue);
    if (onChange) onChange(nextValue);
  };

  const providerValue = {
    updateState,
    currentState: checked,
    inGroup: true,
  };

  useEffect(() => {
    if (value === undefined) return;
    setChecked(value);
  }, [value]);

  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  const classNames = ["coop-c-form-choice"];
  const ariaDescribedBy = [];

  if (hint) ariaDescribedBy.push(hintId);

  if (hasError) {
    classNames.push("coop-form__invalid");
    ariaDescribedBy.push(errorId);
  }

  classNames.push(className);

  return (
    <RadioContext.Provider value={providerValue}>
      <div className="coop-form__row">
        <fieldset
          className={classNames.join(" ")}
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
    </RadioContext.Provider>
  );
};

export default InputRadioGroup;

InputRadioGroup.defaultProps = {
  hasError: false,
  hint: null,
  errorMsg: null,
  children: null,
  className: null,
  initialValue: null,
  value: null,
  onChange: null,
};

InputRadioGroup.propTypes = {
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  hint: PropTypes.string,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  initialValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
};
