import React, { useState, useEffect, forwardRef } from "react";
import PropTypes from "prop-types";
import { useRadioContext } from "../InputRadioGroup/InputRadioGroupContext";
import classNames from "../../utils/classNames";
import "./inputRadio.scss";

const InputRadio = forwardRef(
  (
    {
      id,
      name,
      className,
      label,
      checked,
      value: radioValue,
      disabled,
      onChange,
      ...props
    },
    ref
  ) => {
    const [selfChecked, setSelfChecked] = useState(!!checked);
    const context = useRadioContext();
    const { currentState, updateState, inGroup } = context;
    const classes = classNames(
      "coop-form__field coop-form__radio coop-c-form-choice__input coop-c-form-choice__input--radio-button",
      [className]
    );

    if (inGroup) {
      useEffect(() => {
        setSelfChecked(currentState === radioValue);
      }, [currentState, radioValue]);
    }

    const onChangeHandler = (event) => {
      if (disabled) return;
      const selfEvent = {
        target: {
          checked: !selfChecked,
        },
        stopPropagation: event.stopPropagation,
        preventDefault: event.preventDefault,
        nativeEvent: event,
      };
      setSelfChecked(!selfChecked);
      if (inGroup) {
        if (updateState) updateState(radioValue);
      }
      if (onChange) onChange(selfEvent);
    };

    useEffect(() => {
      if (checked === undefined) return;
      setSelfChecked(!!checked);
    }, [checked]);

    const tagAttributes = {
      id,
      name,
      value: radioValue,
      disabled,
      type: "radio",
      className: classes,
      checked: selfChecked,
      onChange: onChangeHandler,
      ref,
      ...props,
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

InputRadio.defaultProps = {
  disabled: false,
  className: null,
  checked: null,
  onChange: null,
  value: "",
};

InputRadio.propTypes = {
  /** id - (required) can be used for identifying the specific form element for labels and targeting values for sorm submission. */
  id: PropTypes.string.isRequired,
  /** name - (required) can be used for identifying the specific form element for labels and targeting values for sorm submission. */
  name: PropTypes.string.isRequired,
  /** label - (required) all form inputs require a label to describe the what the input does or wat effect it has on page. */
  label: PropTypes.string.isRequired,
  /** value - The value contained in the checkbox, needs to be either string or number.*/
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** className - optional and is used to add more styling to the checkbox if required in your project.*/
  className: PropTypes.string,
  /** checked - is the checkbox checked or not by default */
  checked: PropTypes.bool,
  /** disabled - is the checkbox disabled by default */
  disabled: PropTypes.bool,
  /** onChange - an event function that triggers when the input state changes */
  onChange: PropTypes.func,
};

export default InputRadio;
