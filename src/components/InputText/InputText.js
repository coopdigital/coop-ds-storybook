import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import "./inputText.scss";

const InputText = forwardRef(
  (
    {
      id,
      name,
      type,
      className,
      label,
      hint,
      hasError,
      errorMsg,
      disabled,
      placeholder,
      width,
      ...props
    },
    ref
  ) => {
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;
    const classes = classNames("coop-form__field coop-form__input", [
      hasError && "coop-form__invalid",
      width && `coop-form__input--width-${width}`,
      className,
    ]);

    const ariaDescribedBy = [];
    if (hint) ariaDescribedBy.push(hintId);
    if (hasError) ariaDescribedBy.push(errorId);

    return (
      <div className="coop-form__row">
        {label && (
          <label htmlFor={id} className="coop-form__label">
            {label}
          </label>
        )}
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
        <input
          type={type}
          name={name}
          id={id}
          className={classes}
          aria-describedby={ariaDescribedBy && ariaDescribedBy.join(" ")}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputText.defaultProps = {
  type: "text",
  disabled: false,
  hasError: false,
  className: null,
  hint: null,
  label: null,
  errorMsg: null,
  placeholder: null,
  width: null,
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "hidden"]),
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputText;
