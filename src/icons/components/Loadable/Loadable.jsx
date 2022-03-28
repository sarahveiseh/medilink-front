import React from 'react'

function Loadable(props) {
  const { isLoading, children, ...others } = props
  return (
    <div className="w-full">
      {isLoading && <div>loading...</div>}
      {!isLoading && <div {...others}>{children}</div>}
    </div>
  )
}

export default Loadable
