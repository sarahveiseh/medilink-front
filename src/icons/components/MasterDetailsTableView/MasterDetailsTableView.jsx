// React components
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// Core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// Third party libraries
import MUIDataTable from "mui-datatables";

const MasterDetailsTableViewStyle = {
  detailsCard: {
    height: "500px"
  }
};

class MasterDetailsTableView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow:
        props.preSelectedRow !== null && props.preSelectedRow !== undefined
          ? props.data[props.preSelectedRow]
          : {}
    };
  }
  render() {
    const {
      classes,
      title,
      detailsTitle,
      data,
      columns,
      detailsComponent,
      tableOptions,
      rowClickExtraAction
    } = this.props;

    const getOptions = {
      filterType: "textField",
      print: false,
      filter: false,
      download: false,
      viewColumns: false,
      selectableRows: "none",
      ...tableOptions, // This is to overwrite the options if provided
      onRowClick: (rowData, rowMeta) => {
        this.setState({ selectedRow: data[rowMeta.rowIndex] });
        if (rowClickExtraAction) {
          rowClickExtraAction(data[rowMeta.rowIndex]);
        }
      }
    };
    const { selectedRow } = this.state;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <MUIDataTable
            title={title}
            data={data}
            columns={columns}
            options={getOptions}
          />
        </GridItem>
        {detailsComponent && (
          <GridItem xs={12}>
            <Card className={classes.detailsCard}>
              <CardHeader>{detailsTitle}</CardHeader>
              <CardBody>
                {React.cloneElement(detailsComponent, { selectedRow })}
              </CardBody>
            </Card>
          </GridItem>
        )}
      </GridContainer>
    );
  }
}

MasterDetailsTableView.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  detailsTitle: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  detailsComponent: PropTypes.object.isRequired,
  tableOptions: PropTypes.object,
  rowClickExtraAction: PropTypes.object,
  preSelectedRow: PropTypes.number
};

export default withStyles(MasterDetailsTableViewStyle)(MasterDetailsTableView);
