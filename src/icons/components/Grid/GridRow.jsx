import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

const style = {
  gridRow: {
    display: "flex",
    flexBasis: "100%"
  }
};

function GridRow({ ...props }) {
  const { classes, children, className, ...rest } = props;

  const gridRowClass = classNames(
    {
      [classes.gridRow]: true,
    },
    className
  );

  return (
    <div {...rest} className={gridRowClass}>
      {children}
    </div>
  );
}

export default withStyles(style)(GridRow);
