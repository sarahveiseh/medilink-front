import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CreatableSelect from "react-select/creatable";
import { withStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import CancelIcon from "@material-ui/icons/Cancel";
import CustomInput from "../CustomInput/CustomInput";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    minWidth: 290
  },
  input: {
    display: "flex",
    padding: 0,
    height: "auto"
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  placeholder: {
    position: "absolute",
    left: 2,
    bottom: 6,
    fontSize: 16
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0
  }
});

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ])
};

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps }
  } = props;

  return (
    <CustomInput
      fullWidth
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
}

Control.propTypes = {
  /**
   * Children to render.
   */
  children: PropTypes.node,
  /**
   * The mouse down event and the innerRef to pass down to the controller element.
   */
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  selectProps: PropTypes.object.isRequired
};

function Option(props) {
  const { innerProps } = props;
  return (
    <article {...innerProps}>
      <MenuItem
        selected={props.isFocused}
        style={{
          fontWeight: props.isSelected ? 500 : 400
        }}
        {...innerProps}
      >
        {props.children}
      </MenuItem>
    </article>
  );
}

Option.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // key: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired
  }).isRequired,
  /**
   * Inner ref to DOM Node
   */
  // innerRef: PropTypes.oneOfType([
  //   PropTypes.oneOf([null]),
  //   PropTypes.func,
  //   PropTypes.shape({
  //     current: PropTypes.any.isRequired
  //   })
  // ]).isRequired,
  /**
   * Whether the option is focused.
   */
  isFocused: PropTypes.bool.isRequired,
  /**
   * Whether the option is selected.
   */
  isSelected: PropTypes.bool.isRequired
};

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

ValueContainer.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired
};

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool.isRequired,
  removeProps: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired
  }).isRequired,
  selectProps: PropTypes.object.isRequired
};

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.element.isRequired,
  /**
   * Props to be passed to the menu wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired
};

const components = {
  Control,
  Menu,
  MultiValue,
  Option,
  ValueContainer
};

function CreatableSelectChips(props) {
  const { classes, suggestions, setFieldValue, correspondingField } = props;
  const [multi, setMulti] = React.useState(null);

  const handleChangeMulti = value => {
    setMulti(value);
    setFieldValue(correspondingField, value.map(v => v.value));
  };

  return (
    <div className={classes.root}>
      <div className={classes.divider} />
      <CreatableSelect
        classes={classes}
        inputId="react-select-multiple"
        TextFieldProps={{
          label: "Countries",
          InputLabelProps: {
            htmlFor: "react-select-multiple",
            shrink: true
          }
        }}
        placeholder="Tags"
        options={suggestions}
        components={components}
        value={multi}
        onChange={handleChangeMulti}
        isMulti
      />
    </div>
  );
}

CreatableSelectChips.propTypes = {
  classes: PropTypes.object,
  suggestions: PropTypes.array,
  setFieldValue: PropTypes.func,
  correspondingField: PropTypes.string
};

export default withStyles(styles)(CreatableSelectChips);
