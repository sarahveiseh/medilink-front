import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const style = {
  grid: {
    padding: "0 15px !important",
  },
};

function GridItem({ ...props }) {
  const { classes, className, children, ...rest } = props;

  const gridClasses = classNames(
    {
      [classes.grid]: props.noPadding ? false : true,
    },
    className
  );

  return (
    <Grid item {...rest} className={gridClasses}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
