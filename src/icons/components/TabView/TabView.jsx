import { Tab, Tabs, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useState } from 'react'
import tabViewStyles from './tabViewStyle'

function TabView(props) {
  const initialIndex = props.tabsLabel ? 1 : 0
  const [tabIndex, setTabIndex] = useState(initialIndex)

  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex)
  }

  const {
    children,
    classes,
    tabs,
    tabsLabel,
    existInDom = false,
    errors,
    errorName,
    atLeastOne = false,
  } = props
  const keys = Object.keys(children || {})
  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        classes={{
          root: classes.tabsRoot,
          indicator: classes.tabsIndicator,
        }}
      >
        {tabsLabel && <Tab label={tabsLabel} disabled />}
        {tabs?.map((tab, key) => (
          <Tab
            key={key}
            disableRipple
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected,
            }}
            style={{ color: !!errors?.[errorName]?.[key] ? 'red' : '' }}
            label={tab + ` ${!!errors?.[errorName]?.[key] ? '*err' : ''}`}
          />
        ))}
      </Tabs>
      {tabsLabel && (
        <TabPanel
          existInDom={existInDom}
          currentTabIndex={tabIndex}
          index={0}
        />
      )}
      {keys?.map((k, idx) => {
        const myIndex = tabsLabel ? idx + 1 : idx
        return (
          <TabPanel
            existInDom={existInDom}
            key={idx}
            currentTabIndex={
              !atLeastOne ? tabIndex : tabIndex < keys?.length ? tabIndex : 0
            }
            index={myIndex}
          >
            {children?.[k]}
          </TabPanel>
        )
      })}
    </>
  )
}

TabView.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  tabs: PropTypes.array.isRequired,
  existInDom: PropTypes.bool,
  errors: PropTypes.any,
  errorName: PropTypes.string,
}

function TabPanel(props) {
  const { children, currentTabIndex, index, existInDom } = props

  return (
    <>
      {existInDom ? (
        <div className={`${currentTabIndex !== index ? 'hidden' : ''}`}>
          <>{children ? children : ''}</>
        </div>
      ) : (
        <div hidden={currentTabIndex !== index}>
          {currentTabIndex === index && children}
        </div>
      )}
    </>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired, // The index if this TabPanel
  currentTabIndex: PropTypes.any.isRequired, // Currently selected tab's index
  existInDom: PropTypes.bool,
  atLeastOne: PropTypes.bool,
}

export default withStyles(tabViewStyles)(TabView)
