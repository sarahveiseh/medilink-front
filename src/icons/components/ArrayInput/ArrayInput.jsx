import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import AddCircle from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles";
import { Checkbox } from "@material-ui/core";
// Core components
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelect from "components/CustomSelect/CustomSelect";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle";
// Third party libraries
import { FieldArray, getIn } from "formik";

function resolve(path, obj, separator = ".") {
  var properties = Array.isArray(path) ? path : path.split(separator);
  return properties.reduce((prev, curr) => prev && prev[curr], obj);
}

class ArrayInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    };
  }

  render() {
    const {
      classes,
      tableHead,
      inputFields,
      caption,
      arrayName,
      formProps,
      onDeleteCallback
    } = this.props;
    const { values, touched, errors, handleChange, setFieldValue } = formProps;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{caption}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GridContainer className={classes.table}>
            <FieldArray
              name={arrayName}
              render={arrayHelpers => (
                <GridItem xs={12}>
                  {resolve(arrayName, values) &&
                    resolve(arrayName, values).map((row, index) => {
                      return (
                        <GridItem xs={12} key={index}>
                          <GridContainer>
                            {inputFields.map((prop, key) => {
                              return (
                                <GridItem
                                  className={classes.tableCell}
                                  key={key}
                                  xs={12 / (inputFields.length + 1)}
                                >
                                  {["text", "password", "number"].includes(
                                    prop.typeAndConfig.name
                                  ) && (
                                    <CustomInput
                                      labelText={tableHead[key]}
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      helperText={
                                        getIn(
                                          touched,
                                          `${arrayName}.${index}.${prop.id}`
                                        )
                                          ? getIn(
                                              errors,
                                              `${arrayName}.${index}.${prop.id}`
                                            )
                                          : ""
                                      }
                                      inputProps={{
                                        name: `${arrayName}.${index}.${
                                          prop.id
                                        }`,
                                        id: `${arrayName}.${index}.${prop.id}`,
                                        type: prop.typeAndConfig.name,
                                        onChange: e => {
                                          setFieldValue(
                                            `${arrayName}.${index}.${prop.id}`,
                                            e.target.value
                                          );
                                        },
                                        value: row[prop.id],
                                        error:
                                          getIn(
                                            errors,
                                            `${arrayName}.${index}.${prop.id}`
                                          ) &&
                                          getIn(
                                            touched,
                                            `${arrayName}.${index}.${prop.id}`
                                          ),
                                        ...prop.typeAndConfig.extra
                                      }}
                                    />
                                  )}

                                  {prop.typeAndConfig.name === "select" && (
                                    <CustomSelect
                                      id={`${arrayName}.${index}.${prop.id}`}
                                      formControlProps={{
                                        fullWidth: true
                                      }}
                                      labelText={tableHead[key]}
                                      options={
                                        prop.typeAndConfig.possibleValues
                                      }
                                      selectProps={{
                                        name: `${arrayName}.${index}.${prop.id}`,
                                        onChange: handleChange,
                                        value: row[prop.id] || ""
                                      }}
                                    />
                                  )}

                                  {prop.typeAndConfig.name === "checkbox" && (
                                    <Checkbox
                                      checked={prop.id}
                                      onChange={handleChange}
                                      value={this.state[prop.id] || false}
                                      id={`${arrayName}.${index}.${prop.id}`}
                                      color="primary"
                                    />
                                  )}
                                </GridItem>
                              );
                            })}
                            <GridItem>
                              <Button
                                simple
                                type="submit"
                                color="info"
                                size="lg"
                                onClick={() => {
                                  arrayHelpers.remove(index);
                                  if (onDeleteCallback) {
                                    onDeleteCallback(index);
                                  }
                                }}
                              >
                                <DeleteIcon />
                              </Button>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                      );
                    })}
                  <GridItem xs={12}>
                    <GridItem>
                      {getIn(errors, arrayName) &&
                        getIn(touched, arrayName) &&
                        typeof getIn(errors, arrayName) === "string" && (
                          <Danger>{getIn(errors, arrayName)}</Danger>
                        )}
                      <Button
                        simple
                        color="info"
                        size="lg"
                        onClick={() => {
                          var inputs = {};
                          this.props.inputFields.map((prop) => {
                            inputs[`${prop.id}`] =
                              prop.typeAndConfig.name === "checkbox"
                                ? false
                                : prop.typeAndConfig.name === "number"
                                  ? 0
                                  : "";
                          });
                          arrayHelpers.push(inputs);
                        }}
                      >
                        <AddCircle />
                      </Button>
                    </GridItem>
                  </GridItem>
                </GridItem>
              )}
            />
          </GridContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

ArrayInput.defaultProps = {
  tableHeaderColor: "info"
};

ArrayInput.propTypes = {
  classes: PropTypes.object.isRequired,
  arrayName: PropTypes.string.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  inputFields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
      typeAndConfig: PropTypes.shape({
        name: PropTypes.string,
        possibleValues: PropTypes.arrayOf(PropTypes.string)
      })
    })
  ),
  caption: PropTypes.string,
  formProps: PropTypes.object,
  onDeleteCallback: PropTypes.func
};

export default withStyles(tableStyle)(ArrayInput);
