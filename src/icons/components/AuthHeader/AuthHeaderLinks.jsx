/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import authHeaderLinksStyle from "assets/jss/material-dashboard-react/components/authHeaderLinksStyle.jsx";

function AuthHeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/plans" className={classes.dropdownLink}>
          <CloudDownload className={classes.icons} /> Documentation
        </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(authHeaderLinksStyle)(AuthHeaderLinks);
