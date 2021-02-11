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
  /** id - (required) can be used for identifying the specific form element for labels and targeting values for form submission. */
  id: PropTypes.string.isRequired,
  /** name - (required) can be used for identifying the specific form element for labels and targeting values for form submission. */
  name: PropTypes.string.isRequired,
  /** type - can be one of either `text` or `hidden`*/
  type: PropTypes.oneOf(["text", "hidden"]),
  /** className - optional and is used to add more styling to the input if required in your project.*/
  className: PropTypes.string,
  /** label - It's helpful fot all form inputs require a label to describe the what the input does. */
  label: PropTypes.string,
  /** hint - (optional) can be used to help guide users in filling in areas of a form. */
  hint: PropTypes.string,
  /** hasError - (optional/state managed?) this would trigger on the element when an error state occurs.
   * Requires state management to set this */
  hasError: PropTypes.bool,
  /** errorMsg - (optional) shows the user an error message when an error occurs in filling out a form or form processing.*/
  errorMsg: PropTypes.string,
  /** disabled - is the input disabled by default or not.*/
  disabled: PropTypes.bool,
  /** placeholder - a string of text used as a placeholder for the input.*/
  placeholder: PropTypes.string,
  /** width - used to set the width of the input in a form.  Width is based on percentage of the inputs parent container.*/
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputText;
