import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import styles from "./StatusIndicator.styles";
import { Tooltip } from "@material-ui/core";
import PropTypes from "prop-types";

function StatusIndicator({ status, classes }) {
  const color =
    status === "healthy"
      ? "success"
      : status === "warning"
        ? "warning"
        : status === "critical"
          ? "danger"
          : "white";
  return (
    <Tooltip title={status || "N/A"}>
      <div
        className={classNames({
          [classes.shape]: true,
          [classes.shapeCircle]: true,
          [classes[color]]: color,
        })}
      />
    </Tooltip>
  );
}

StatusIndicator.propTypes = {
  status: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusIndicator);
