//import SwipeableViews from "react-swipeable-views";
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import navPillsStyle from 'assets/jss/material-dashboard-react/components/navPillsStyle.jsx'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import { prototype } from 'pretty-error'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
import React from 'react'

class NavPills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: props.active,
      stepValidity: [...Array(props.tabs.length)].map((_, __) => false),
      formValue: {},
    }
  }
  handleChange = (event, active) => {
    // Because we want the forms to be pushed and validated, we don't let the users to
    // to go to the next step via clicking on the tabs and they should click on the next button.
    // Going backwards using the tabs is allowed.
    if (active >= this.state.active) return
    this.setState({ active, stepsValidity: this.props.stepValidity })
  }
  handleChangeIndex = (index) => {
    this.setState({ active: index })
  }
  submitStepHandler = (values) => {
    const activeStep = this.state.active
    var formValue = this.state.formValue
    formValue[this.props.tabs[activeStep].tabName] = values // Set the form value to be sent
    if (activeStep == this.props.tabs.length - 1) {
      // This is the last tab so submit the form
      this.props.submitFormHandler(this.state.formValue)
    } else {
      // This is not the last tab so go to the next tab
      var validity = this.state.stepValidity
      validity[activeStep] = true
      this.setState({
        active: this.state.active + 1,
        stepValidity: validity,
        formValue,
      })
    }
  }
  render() {
    const {
      classes,
      tabs,
      direction,
      color,
      horizontal,
      alignCenter,
      submitFormHandler,
    } = this.props
    const flexContainerClasses = classNames({
      [classes.flexContainer]: true,
      [classes.horizontalDisplay]: horizontal !== undefined,
    })
    const tabButtons = (
      <Tabs
        classes={{
          root: classes.root,
          fixed: classes.fixed,
          flexContainer: flexContainerClasses,
          indicator: classes.displayNone,
        }}
        value={this.state.active}
        onChange={this.handleChange}
        centered={alignCenter}
      >
        {tabs.map((prop, key) => {
          var icon = {}
          if (prop.tabIcon !== undefined) {
            icon['icon'] = <prop.tabIcon className={classes.tabIcon} />
          }
          const pillsClasses = classNames({
            [classes.pills]: true,
            [classes.horizontalPills]: horizontal !== undefined,
            [classes.pillsWithIcons]: prop.tabIcon !== undefined,
          })
          return (
            <Tab
              disabled={key != 0 && !this.state.stepValidity[key - 1]}
              label={prop.tabButton}
              key={key}
              {...icon}
              classes={{
                root: pillsClasses,
                labelContainer: classes.labelContainer,
                label: classes.label,
                selected: classes[color],
              }}
            />
          )
        })}
      </Tabs>
    )
    const tabContent = (
      <div className={classes.contentWrapper}>
        Swipeable
        {/* <SwipeableViews
          axis={direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.active}
          onChangeIndex={this.handleChangeIndex}
        >
          {tabs.map((prop, key) => {
            return (
              <div className={classes.tabContent} key={key}>
                {(key === 0 || this.state.stepValidity[key - 1]) &&
                  React.cloneElement(prop.tabContent, {
                    submitStepHandler: this.submitStepHandler,
                    formValue: this.state.formValue
                  })}
              </div>
            );
          })}
        </SwipeableViews> */}
      </div>
    )
    return horizontal !== undefined ? (
      <GridContainer>
        <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
        <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
      </GridContainer>
    ) : (
      <div>
        {tabButtons}
        {tabContent}
      </div>
    )
  }
}

NavPills.defaultProps = {
  active: 0,
  color: 'info',
}

NavPills.propTypes = {
  classes: PropTypes.object.isRequired,
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.func,
      tabName: prototype.string,
      tabContent: PropTypes.node,
    })
  ).isRequired,
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object,
  }),
  alignCenter: PropTypes.bool,
}

export default withStyles(navPillsStyle)(NavPills)
