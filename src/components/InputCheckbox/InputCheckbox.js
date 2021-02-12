import React, { useState, useEffect, useCallback, forwardRef } from "react";
import PropTypes from "prop-types";
import { useCheckboxContext } from "../InputCheckboxGroup/InputCheckboxGroupContext";
import classNames from "../../utils/classNames";
import "./inputCheckbox.scss";

const InputCheckbox = forwardRef(
  (
    {
      id,
      name,
      className,
      label,
      checked,
      value: checkboxValue,
      disabled,
      onChange,
      ...props
    },
    ref
  ) => {
    const [selfChecked, setSelfChecked] = useState(!!checked);
    const { updateState, inGroup, values } = useCheckboxContext();
    const classes = classNames(
      "coop-form__field coop-form__checkbox coop-c-form-choice__input coop-c-form-choice__input--checkbox",
      [className]
    );

    if (inGroup) {
      useEffect(() => {
        const next = values.includes(checkboxValue);
        if (next === selfChecked) return;
        setSelfChecked(next);
      }, [values.join(",")]);
    }

    const onChangeHandler = useCallback(
      (event) => {
        if (disabled) return;

        const selfEvent = {
          target: {
            checked: !selfChecked,
          },
          stopPropagation: event.stopPropagation,
          preventDefault: event.preventDefault,
          nativeEvent: event,
        };
        if (inGroup && updateState) {
          if (updateState) updateState(checkboxValue, !selfChecked);
        }

        setSelfChecked(!selfChecked);
        if (onChange) onChange(selfEvent);
      },
      [updateState, onChange, disabled, selfChecked]
    );

    useEffect(() => {
      if (checked === undefined) return;
      setSelfChecked(!!checked);
    }, [checked]);

    const tagAttributes = {
      id,
      name,
      value: checkboxValue,
      label,
      disabled,
      type: "checkbox",
      className: classes,
      checked: selfChecked,
      onChange: onChangeHandler,
      ...props,
      ref,
    };

    return (
      <div className="coop-c-form-choice">
        <input {...tagAttributes} />
        <label
          className="coop-form__label coop-c-form-choice__label"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }
);

InputCheckbox.defaultProps = {
  disabled: false,
  className: null,
  checked: null,
  onChange: null,
  value: "",
};

InputCheckbox.propTypes = {
  /** id - is required can be used for identifying the specific form element for labels and targeting values for sorm submission. */
  id: PropTypes.string.isRequired,
  /** name - is required can be used for identifying the specific form element for labels and targeting values for sorm submission. */
  name: PropTypes.string.isRequired,
  /** label - all form inout require a label to describe the what the input does or wat effect it has on page. */
  label: PropTypes.string.isRequired,
  /** value -  The value contained in the checkbox, needs to be either string or number. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** className - optional and is used to add more styling to the checkbox if required in your project. */
  className: PropTypes.string,
  /** checked - is the checkbox checked or not by default */
  checked: PropTypes.bool,
  /** disabled - is the checkbox disabled by default */
  disabled: PropTypes.bool,
  /** onChange - an event that triggers when the input state changes */
  onChange: PropTypes.func,
};

export default InputCheckbox;
