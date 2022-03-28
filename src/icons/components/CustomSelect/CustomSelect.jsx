import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import Button from 'components/CustomButtons/Button.jsx'
import Refresh from '@material-ui/icons/Refresh'
import withStyles from '@material-ui/core/styles/withStyles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
// core components
import { FormHelperText, Select, MenuItem, Input } from '@material-ui/core'

import customSelectStyle from 'assets/jss/material-dashboard-react/components/customSelectStyle'

function CustomSelect({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    helperText,
    id,
    labelProps,
    selectProps,
    error,
    success,
    options,
    optionsMapping,
    fetchOptions,
  } = props

  const optionKey = (optionsMapping && optionsMapping.key) || 'key'
  const optionValue = (optionsMapping && optionsMapping.value) || 'value'

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error,
  })
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  })
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  })

  return (
    <div className={classes.wrapper}>
      <FormControl
        {...formControlProps}
        className={formControlProps.className + ' ' + classes.formControl}
      >
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + labelClasses}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Select
          classes={{
            root: marginTop,
            disabled: classes.disabled,
          }}
          // input={
          //   <Input
          //     formControlProps={formControlProps}
          //     classes={{
          //       disabled: classes.disabled,
          //       underline: underlineClasses
          //     }}
          //   />
          // }
          id={id}
          {...selectProps}
        >
          {options.map((option, idx) => {
            return (
              <MenuItem
                key={idx}
                value={option[optionValue] || ''}
                disabled={option.disabled || false}
              >
                {option[optionKey]}
              </MenuItem>
            )
          })}
        </Select>
        {selectProps.error && (
          <FormHelperText id="component-error-text">
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
      {fetchOptions && (
        <Button
          justIcon
          round
          onClick={fetchOptions}
          color="white"
          aria-label="Next"
        >
          <Refresh className={classes.icons} />
        </Button>
      )}
    </div>
  )
}

CustomSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.string,
  helperText: PropTypes.string,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
}

export default withStyles(customSelectStyle)(CustomSelect)
