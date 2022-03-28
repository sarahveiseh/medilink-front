import {
  grayColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
} from "assets/jss/material-dashboard-react.jsx";

const styles = (theme) => ({
  shape: {
    width: 15,
    height: 15,
  },
  shapeCircle: {
    borderRadius: "50%",
  },
  white: {
    backgroundColor: grayColor,
  },
  success: {
    backgroundColor: successColor,
    boxShadow:
      "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: successColor,
      boxShadow:
        "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)",
    },
  },
  warning: {
    backgroundColor: warningColor,
    boxShadow:
      "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: warningColor,
      boxShadow:
        "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)",
    },
  },
  danger: {
    backgroundColor: dangerColor,
    boxShadow:
      "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: dangerColor,
      boxShadow:
        "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)",
    },
  },
});

export default styles;
