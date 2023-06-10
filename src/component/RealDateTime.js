import React from 'react'

const RealDateTime = (props) => {
    const realTime = (time) => {
        return time;
    }
    setInterval(() => realTime(props.data.location.localtime),1000)
  return (
    <div>
      <div>{realTime(props.data.location.localtime)}</div>
    </div>
  )
}

export default RealDateTime
