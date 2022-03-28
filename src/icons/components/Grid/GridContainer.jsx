import React from "react";
// @material-ui/core components
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  }
};

function GridContainer(props) {
  const { classes, className, children, ...rest } = props;
  const gridClasses = classNames(
    {
      [classes.grid]: true,
    },
    className
  );
  return (
    <Grid container {...rest} className={gridClasses}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
