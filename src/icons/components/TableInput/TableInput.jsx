import { Checkbox, Icon, Input } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import tableStyle from 'assets/jss/material-dashboard-react/components/tableStyle'
// core components
import Button from 'components/CustomButtons/Button.jsx'
import CustomInput from 'components/CustomInput/CustomInput.jsx'
// Third party libraries
import { FieldArray } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'

function resolve(path, obj, separator = '.') {
  var properties = Array.isArray(path) ? path : path.split(separator)
  return properties.reduce((prev, curr) => prev && prev[curr], obj)
}

class TableInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData: [],
    }
    //this.state[`${props.}`]

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCheckChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked })
  }

  handleRemove(event) {
    var tableData = this.state.tableData
    tableData.splice(event, 1)
    this.setState(tableData)
  }

  handleClick() {
    this.props.inputFields.map((prop, key) => {
      var s = {}
      s[prop.id] = ''
      this.setState(s)
    })
  }

  renderColumn(value, type) {
    var toRender = value
    if (type === 'checkbox') {
      toRender = value ? 'Yes' : 'No'
    } else if (type === 'password') {
      toRender = '*****'
    }
    return toRender
  }

  render() {
    const {
      classes,
      tableHead,
      inputFields,
      tableHeaderColor,
      caption,
      arrayName,
      formProps,
    } = this.props
    const {
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
    } = this.props.formProps
    return (
      <div className={classes.tableResponsive}>
        <h4>{caption}</h4>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
              <TableRow>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={
                        classes.tableCell + ' ' + classes.tableHeadCell
                      }
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  )
                })}
                <TableCell>{/* No title */}</TableCell>
              </TableRow>
            </TableHead>
          ) : null}
          <FieldArray
            name={arrayName}
            render={(arrayHelpers) => (
              <TableBody>
                {resolve(arrayName, values) &&
                  resolve(arrayName, values).map((row, i) => {
                    return (
                      <TableRow key={i}>
                        {inputFields.map((inp, j) => {
                          return (
                            <TableCell className={classes.tableCell} key={j}>
                              <Input
                                multiline={true}
                                readOnly={true}
                                disabled={true}
                                value={this.renderColumn(
                                  row[inp.id],
                                  inp.typeAndConfig.name
                                )}
                              />
                            </TableCell>
                          )
                        })}
                        <TableCell>
                          <Button
                            simple
                            type="submit"
                            color="info"
                            size="lg"
                            onClick={() => arrayHelpers.remove(i)}
                          >
                            <Icon>clear</Icon>
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                <TableRow>
                  {inputFields.map((prop, key) => {
                    return (
                      <TableCell className={classes.tableCell} key={key}>
                        {['text', 'password', 'number'].includes(
                          prop.typeAndConfig.name
                        ) && (
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              style: { margin: '0 0 0 0' },
                            }}
                            inputProps={{
                              name: prop.id,
                              type: prop.typeAndConfig.name,
                              onChange: this.handleChange,
                              value: this.state[prop.id] || '',
                              // error: touched.newEnvName && !!errors.newEnvName,
                              // helperText: touched.newEnvName
                              //   ? errors.newEnvName
                              //   : ""
                              ...prop.typeAndConfig.extra,
                            }}
                          />
                        )}

                        {prop.typeAndConfig.name === 'select' && (
                          <Select
                            value={this.state[prop.id]}
                            onChange={this.handleChange}
                            inputProps={{
                              name: prop.id,
                              id: prop.id,
                            }}
                          >
                            {prop.typeAndConfig.possibleValues.map((value) => {
                              return (
                                <MenuItem key={value} value={value}>
                                  {value}
                                </MenuItem>
                              )
                            })}
                          </Select>
                        )}

                        {prop.typeAndConfig.name === 'checkbox' && (
                          <Checkbox
                            checked={this.state[prop.id] || false}
                            onChange={this.handleCheckChange(prop.id)}
                            value={this.state[prop.id] || false}
                            id={prop.id}
                            color="primary"
                          />
                        )}
                      </TableCell>
                    )
                  })}
                  <TableCell>
                    <Button
                      simple
                      color="info"
                      size="lg"
                      onClick={() => {
                        var inputs = {}
                        this.props.inputFields.map((prop, key) => {
                          inputs[`${prop.id}`] = this.state[`${prop.id}`]
                        })
                        arrayHelpers.push(inputs)
                        this.handleClick()
                      }}
                    >
                      <Icon>done</Icon>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          />
        </Table>
      </div>
    )
  }
}

TableInput.defaultProps = {
  tableHeaderColor: 'info',
}

TableInput.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  inputFields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
      typeAndConfig: PropTypes.shape({
        name: PropTypes.string,
        possibleValues: PropTypes.arrayOf(PropTypes.string),
      }),
    })
  ),
  caption: PropTypes.string,
  formProps: PropTypes.object,
}

export default withStyles(tableStyle)(TableInput)
