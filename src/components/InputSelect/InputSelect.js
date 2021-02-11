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
  /** id - (required) can be used for identifying the specific form element for labels and targeting values for form submission. */
  id: PropTypes.string.isRequired,
  /** name - (required) can be used for identifying the specific form element for labels and targeting values for form submission. */
  name: PropTypes.string.isRequired,
  /** className - optional and is used to add more styling to the input if required in your project.*/
  className: PropTypes.string,
  /** label - all form inputs require a label to describe the what the input does. */
  label: PropTypes.string,
  /** hint - (optional) can be used to help guide users in filling in areas of a form. */
  hint: PropTypes.string,
  /** hasError - (optional/state managed?) this would trigger on the element when an error state occurs.
   * Requires state management to set this */
  hasError: PropTypes.bool,
  /** errorMsg - (optional) shows the user an error message when an error occurs in filling out a form or form processing. */
  errorMsg: PropTypes.string,
  /** options - a list/array of objects containing a text property and value property used to populate the select options */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string || PropTypes.number,
      value: PropTypes.string || PropTypes.number,
    })
  ),
  /** placeholder - a string of text used as a placeholder for the select options */
  placeholder: PropTypes.string,
  /** width - used to set the width of a select input in a form.  Width is based on percentage of the selects parent container  */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputSelect;
