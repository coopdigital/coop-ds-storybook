import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const InputSelect = forwardRef(
  (
    {
      id,
      name,
      className,
      label,
      hint,
      hasError,
      errorMsg,
      options,
      placeholder,
      width,
      ...props
    },
    ref
  ) => {
    const classes = classNames("coop-form__field coop-form__select", [
      hasError && "coop-form__invalid",
      width && `coop-form__input--width-${width}`,
      className,
    ]);

    return (
      <div className="coop-form__row">
        {label && (
          <label className="coop-form__label" htmlFor={id}>
            {label}
          </label>
        )}
        {hint && (
          <p id={`${id}-hint`} className="coop-form__hint">
            This is an example hint
          </p>
        )}
        {hasError && (
          <p id={`${id}-error`} className="coop-form__error">
            {errorMsg}
          </p>
        )}
        <select
          id={id}
          name={name}
          className={classes}
          aria-describedby={`${id}-hint`}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled selected hidden>
              {placeholder}
            </option>
          )}
          {options.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

InputSelect.defaultProps = {
  className: null,
  label: null,
  hint: null,
  hasError: false,
  errorMsg: null,
  options: [],
  placeholder: null,
  width: null,
};

InputSelect.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string || PropTypes.number,
      value: PropTypes.string || PropTypes.number,
    })
  ),
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputSelect;
