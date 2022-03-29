import { useCallback } from "react";
import {
  laterValidation,
  maxValidation,
  requiredValidation,
  minValidation,
  precentValidation,
  passwordValidation,
  emailValidation,
  lowerCaseValidation,
  numberValidation,
  integerValidation,
  positiveValidation,
  notZeroValidation,
  moreThanValidation,
  lessThanValidation,
  moreThanEqualValidation,
  lessThanEqualValidation,
} from "./utils";

export const useValidation = (props) => {
  const {
    required,
    min,
    max,
    later,
    validation,
    precent,
    password,
    email,
    lowerCase,
    isNumber,
    integer,
    positive,
    notZero,
    moreThan,
    lessThan,
    moreThanEqual,
    lessThanEqual,
  } = props;

  return {
    validate: useCallback(
      (value) => {
        let error;
        if (required) {
          const requiredError = requiredValidation(value, required);
          error = requiredError ? requiredError : error;
        }
        if (max) {
          const maxError = maxValidation(value, max);
          error = maxError ? maxError : error;
        }
        if (min) {
          const minError = minValidation(value, min);
          error = minError ? minError : error;
        }
        if (later) {
          const laterError = laterValidation(value, later);
          error = laterError ? laterError : error;
        }
        if (precent) {
          const precentError = precentValidation(value);
          error = precentError ? precentError : error;
        }
        if (password) {
          const passwordError = passwordValidation(value);
          error = passwordError || error;
        }
        if (email) {
          const emailError = emailValidation(value);
          error = emailError || error;
        }
        if (lowerCase) {
          const lowerCaseError = lowerCaseValidation(value);
          error = lowerCaseError || error;
        }
        if (isNumber) {
          const isNumberError = numberValidation(value);
          error = isNumberError || error;
        }
        if (integer) {
          const isIntegerError = integerValidation(value);
          error = isIntegerError || error;
        }
        if (positive) {
          const isPositiveError = positiveValidation(value);
          error = isPositiveError || error;
        }
        if (notZero) {
          const isNotZeroError = notZeroValidation(value);
          error = isNotZeroError || error;
        }
        if (moreThan || moreThanEqual === 0) {
          const isMoreThanError = moreThanValidation(value, moreThan);
          error = isMoreThanError || error;
        }
        if (lessThan || moreThanEqual === 0) {
          const isLessThanError = lessThanValidation(value, lessThan);
          error = isLessThanError || error;
        }
        if (moreThanEqual || moreThanEqual === 0) {
          const isMoreThanEqualError = moreThanEqualValidation(
            value,
            moreThanEqual
          );
          error = isMoreThanEqualError || error;
        }
        if (lessThanEqual || moreThanEqual === 0) {
          const isLessThanEqualError = lessThanEqualValidation(
            value,
            lessThanEqual
          );
          error = isLessThanEqualError || error;
        }
        if (validation) {
          const validationError = validation(value);
          error = validationError ? validationError : error;
        }
        return error;
      },
      [
        required,
        max,
        min,
        later,
        precent,
        password,
        email,
        lowerCase,
        integer,
        isNumber,
        positive,
        notZero,
        moreThan,
        lessThan,
        moreThanEqual,
        lessThanEqual,
        validation,
      ]
    ),
  };
};
