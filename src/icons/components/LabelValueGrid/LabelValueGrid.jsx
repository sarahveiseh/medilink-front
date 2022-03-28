import React from "react";
import PropTypes from "prop-types";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { withStyles } from "@material-ui/core";
import labelValueGridStyles from "./LabelValueGridStyles";
import { Link } from "react-router-dom";

// Shows a list of label-value pairs in a gird. The size of each GridItem can be adjusted.
function LabelValueGrid({ classes, elements }) {
  return (
    <GridContainer>
      {elements.map((el, idx) => (
        <GridItem key={idx} xs={el.cols || 6}>
          <span className={classes.label}>{el.label}</span>
          {el.isLink ? (
            <Link to={el.linkTarget}>{el.value}</Link>
          ) : (
            <span className={classes.value}>{el.value}</span>
          )}
        </GridItem>
      ))}
    </GridContainer>
  );
}

LabelValueGrid.propTypes = {
  elements: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(labelValueGridStyles)(LabelValueGrid);
