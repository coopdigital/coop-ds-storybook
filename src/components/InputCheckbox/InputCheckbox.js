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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputCheckbox;
