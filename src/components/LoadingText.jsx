import React from 'react'

const LoadingText = ({text, extraClasses}) => {
    const classes = 'animated ' + extraClasses
  return (
    <h1 className={classes}>
        {text}<span>.</span><span>.</span><span>.</span>
    </h1>
  )
}

export default LoadingText