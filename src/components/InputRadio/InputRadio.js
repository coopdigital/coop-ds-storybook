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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputRadio;
