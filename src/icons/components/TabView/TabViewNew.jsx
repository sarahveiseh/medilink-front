import { Tab, Tabs, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useState } from 'react'
import tabViewStyles from './tab-view-style-new'

const hasError = ({ errors, parentName, names, index }) => {
  return names
    ?.split(',')
    ?.some((name) => !!errors?.[parentName]?.[index]?.[name])
}

function TabViewNew(props) {
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
    parentName,
  } = props
  const keys = Object.keys(children || {})

  // hasError({ errors, names: errorName, parentName, index: key })
  //               ? ' *Err'
  //               : ''

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
        {tabs.map((tab, key) => (
          <Tab
            key={key}
            disableRipple
            classes={{
              root: classes.tabRoot,
              selected: classes.tabSelected,
            }}
            className={`${
              hasError({
                errors,
                names: errorName,
                parentName,
                index: key,
              })
                ? '!bg-red-500'
                : ''
            }`}
            label={`${tab} ${
              hasError({
                errors,
                names: errorName,
                parentName,
                index: key,
              })
                ? '*err'
                : ''
            }`}
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
      {keys.map((k, idx) => {
        const myIndex = tabsLabel ? idx + 1 : idx
        return (
          <TabPanel
            existInDom={existInDom}
            key={idx}
            currentTabIndex={tabIndex}
            index={myIndex}
          >
            {children[k]}
          </TabPanel>
        )
      })}
    </>
  )
}

TabViewNew.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  tabs: PropTypes.array.isRequired,
}

function TabPanel(props) {
  const { children, currentTabIndex, index, existInDom } = props

  return (
    // <div hidden={currentTabIndex !== index}>
    //   {currentTabIndex === index && <>{children}</>}
    // </div>
    <>
      {existInDom ? (
        <div className={`${currentTabIndex !== index ? 'hidden' : ''}`}>
          {children}
        </div>
      ) : (
        <div hidden={currentTabIndex !== index}>
          {currentTabIndex === index && <>{children}</>}
        </div>
      )}
    </>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired, // The index if this TabPanel
  currentTabIndex: PropTypes.any.isRequired, // Currently selected tab's index
}

export default withStyles(tabViewStyles)(TabViewNew)
