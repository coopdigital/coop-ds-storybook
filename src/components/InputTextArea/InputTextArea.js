import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./inputTextArea.scss";

const InputTextArea = forwardRef(
  (
    {
      id,
      name,
      cols,
      rows,
      className,
      label,
      hint,
      hasError,
      errorMsg,
      disabled,
      ...props
    },
    ref
  ) => {
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;
    const classNames = ["coop-form__field", "coop-form__textarea"];
    const ariaDescribedBy = [];

    if (hint) ariaDescribedBy.push(hintId);

    if (hasError) {
      classNames.push("coop-form__invalid");
      ariaDescribedBy.push(errorId);
    }

    classNames.push(className);

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
        <textarea
          cols={cols}
          rows={rows}
          name={name}
          id={id}
          className={classNames.join(" ")}
          aria-describedby={ariaDescribedBy && ariaDescribedBy.join(" ")}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputTextArea.defaultProps = {
  cols: 30,
  rows: 4,
  className: null,
  label: null,
  hint: null,
  hasError: false,
  errorMsg: null,
  disabled: false,
};

InputTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cols: PropTypes.number,
  rows: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputTextArea;
