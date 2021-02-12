import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const InputDOB = ({ id, name, label, hint, hasError, errors, refs }) => {
  const dayClasses = classNames(
    "coop-form__field coop-form__input coop-form__input--width-2",
    [hasError && "coop-form__invalid"]
  );
  const monthClasses = classNames(
    "coop-form__field coop-form__input coop-form__input--width-2",
    [hasError && "coop-form__invalid"]
  );
  const yearClasses = classNames(
    "coop-form__field coop-form__input coop-form__input--width-4",
    [hasError && "coop-form__invalid"]
  );

  return (
    <div className="coop-form__row">
      <fieldset aria-describedby={`${id}-hint ${id}-error`}>
        {label && <legend className="coop-form__label">{label}</legend>}
        {hint && (
          <p id={`${id}-hint`} className="coop-form__hint">
            {hint}
          </p>
        )}
        {hasError &&
          Object.entries(errors).map(([key, value]) => (
            <p id={`${id}-${key}-error`} key={key} className="coop-form__error">
              {value}
            </p>
          ))}

        <div className="coop-form__columns">
          <div className="coop-form__column">
            <label className="coop-form__label" htmlFor={`${id}-day`}>
              Day
            </label>
            <input
              id={`${id}-day`}
              name={`${name}-day`}
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="2"
              minLength="2"
              autoComplete="bday-day"
              className={dayClasses}
              ref={refs.day}
            />
          </div>
          <div className="coop-form__column">
            <label className="coop-form__label" htmlFor={`${id}-month`}>
              Month
            </label>
            <input
              id={`${id}-month`}
              name={`${name}-month`}
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="2"
              minLength="2"
              autoComplete="bday-month"
              className={monthClasses}
              ref={refs.month}
            />
          </div>
          <div className="coop-form__column">
            <label className="coop-form__label" htmlFor={`${id}-year`}>
              Year
            </label>
            <input
              id={`${id}-year`}
              name={`${name}-year`}
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="4"
              minLength="4"
              autoComplete="bday-year"
              className={yearClasses}
              ref={refs.year}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

InputDOB.defaultProps = {
  label: "What is your date of birth?",
  hint: "For example 21 12 2020",
  hasError: false,
  errors: {
    default: "The date of birth you entered is invalid",
  },
  refs: {},
};

InputDOB.propTypes = {
  /** id - (required) so we can target areas of the form for processing */
  id: PropTypes.string.isRequired,
  /** name - (required) used for identifying the specific form element for labels and targeting values for sorm submission */
  name: PropTypes.string.isRequired,
  /** label - The legend for the DOB input group */
  label: PropTypes.string,
  /** hint - Helps guide user in filling in the input group  */
  hint: PropTypes.string,
  /** hasError - should flag when errors with input occur.  Usually managed via state? */
  hasError: PropTypes.bool,
  /** errors - The errors messages for each input to be displayed on input/form error */
  errors: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  /** :::TODO::: refs -  */
  refs: PropTypes.shape({
    day: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.elementType }),
    ]),
    month: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.elementType }),
    ]),
    year: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.elementType }),
    ]),
  }),
};

export default InputDOB;
