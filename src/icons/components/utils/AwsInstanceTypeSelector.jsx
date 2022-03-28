import React from "react";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import filter from "lodash/filter";
import Button from "components/CustomButtons/Button.jsx";
import {
  MenuItem,
  FormControl,
  Select,
  Checkbox,
  InputLabel,
  Input,
  Chip,
  withStyles,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  }
});

const listOfInstanceTypes = [
  {
    cpu: 1,
    memory: 1024,
    name: "t2.nano",
    price: 0.12
  },
  {
    cpu: 1,
    memory: 2048,
    name: "t3.nano",
    price: 0.12
  },
  {
    cpu: 2,
    memory: 1024,
    name: "t2.small",
    price: 0.12
  },
  {
    cpu: 2,
    memory: 2048,
    name: "t3.small",
    price: 0.12
  },
  {
    cpu: 3,
    memory: 2048,
    name: "t3.medium",
    price: 0.12
  }
];

class AwsInstanceTypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredListOfInstanceTypes: [],
      showHelper: true
    };

    this.handleShowHelperChange = this.handleShowHelperChange.bind(this);
    this.handleCriteriaChange = this.handleCriteriaChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterListOfInstanceTypes = this.filterListOfInstanceTypes.bind(this);
  }

  handleCriteriaChange(event) {
    this.filterListOfInstanceTypes(event.target.name, event.target.value);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleShowHelperChange(event, showHelper) {
    this.setState({
      showHelper
    });
  }

  filterListOfInstanceTypes(name, value) {
    const cpu = name == "cpu" ? value : this.state.cpu || -1;
    const memory = name == "memory" ? value : this.state.memory || -1;
    const refinedList = filter(listOfInstanceTypes, item => {
      return item.cpu == cpu || item.memory == memory;
    });

    this.setState({
      [name]: value,
      filteredListOfInstanceTypes: refinedList || []
    });
  }

  render() {
    const { filteredListOfInstanceTypes, cpu, memory } = this.state;
    const { classes } = this.props;
    const props = this.props;
    return (
      <GridContainer>
        <GridItem>
          <h5>Find instance types based on vCPUs or memory size</h5>
        </GridItem>
        <GridItem xs={12}>
          <GridContainer>
            <GridItem md={2}>
              <CustomInput
                labelText="CPU"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: cpu,
                  name: "cpu",
                  onChange: this.handleCriteriaChange,
                  type: "text"
                }}
              />
            </GridItem>
            <GridItem md={2}>
              <CustomInput
                labelText="Memory"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: memory,
                  name: "memory",
                  onChange: this.handleCriteriaChange,
                  type: "text"
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell allign="right">CPU</TableCell>
                <TableCell allign="right">Memory</TableCell>
                <TableCell allign="right">Name</TableCell>
                <TableCell allign="right"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredListOfInstanceTypes.map((prop, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell allign="right">{prop.cpu}</TableCell>
                    <TableCell allign="right">{prop.memory}</TableCell>
                    <TableCell allign="right">{prop.name}</TableCell>
                    <TableCell allign="right">
                      <Button simple color="info" size="lg">
                        i
                      </Button>
                      <Button
                        simple
                        color="info"
                        size="lg"
                        onClick={() =>
                          props.setFieldValue(
                            `${props.formPrefix}.instanceType`,
                            prop.name
                          )
                        }
                      >
                        Select
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(AwsInstanceTypeSelector);
