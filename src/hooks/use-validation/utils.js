const requiredValidation = (value, required) => {
  if (required && [null, undefined, ''].includes(value))
    return 'This field is required.'
}

const maxValidation = (value, max) => {
  if (max && value && value.length > max)
    return `This field must be equal or less than ${max} characters.`
}

const minValidation = (value, min) => {
  if (min && value && value.length < min)
    return `This field must be equal or more than ${min} characters.`
}

const laterValidation = (value, later) => {
  if (later && value) {
    const date = new Date()
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const start = new Date(value)
    const currentYear = new Date().getFullYear()
    const year = new Date(value).getFullYear()
    if (start <= today) {
      return 'The date should be later than today.'
    }
    if (year < currentYear - 100 || year > currentYear + 100)
      return 'Bad format'
  }
}

const precentValidation = (value) => {
  if (parseFloat(value) < 0 || parseFloat(value) > 100)
    return 'This field mut be between 0 and 100.'
}

const passwordValidation = (value) => {
  if (value)
    if (
      value.match(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
      ) === null ||
      !value.match(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
      ).length
    )
      return 'Password needs to contain at least a digit, a capital letter and one of: !@#$%^&*'
}

const emailValidation = (value) => {
  if (value)
    if (
      value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) === null ||
      !value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).length
    )
      return 'Invalid email format'
}

const lowerCaseValidation = (value) => {
  if (value !== (value || '').toLowerCase())
    return 'This field must be lowercase'
}

const numberValidation = (value) => {
  if (typeof +value !== 'number') return 'This field must be number'
}

const integerValidation = (value) => {
  if (typeof +value === 'number' && !Number.isInteger(+value))
    return 'This field must be integer'
}
const positiveValidation = (value) => {
  if (typeof +value === 'number' && +value < 0)
    return 'This field must be positive'
}
const notZeroValidation = (value) => {
  if (
    ![null, undefined, ''].includes(value) &&
    typeof +value === 'number' &&
    +value === 0
  )
    return 'This field must be not zero'
}

const moreThanValidation = (value, min) => {
  if (value !== '' && typeof +value === 'number' && +value <= +min)
    return `This field must be more than ${min}`
}
const lessThanValidation = (value, max) => {
  if (value !== '' && typeof +value === 'number' && +value >= +max)
    return `This field must be less than ${max}`
}
const moreThanEqualValidation = (value, min) => {
  if (value !== '' && typeof +value === 'number' && +value < +min)
    return `This field must be more than equal ${min}`
}
const lessThanEqualValidation = (value, max) => {
  if (value !== '' && typeof +value === 'number' && +value > +max)
    return `This field must be less than equal ${max}`
}

export {
  requiredValidation,
  maxValidation,
  minValidation,
  laterValidation,
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
}
