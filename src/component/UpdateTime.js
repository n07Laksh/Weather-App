import React from 'react'

const UpdateTime = (props) => {
    const currentTime = (d) => {
        let date = new Date(d);
        let hours = date.getHours();
        let minutes = date.getMinutes()+1;
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;  // convert 22 hour format to 12 hour
        hours = hours ? hours : 12; // if hours is 0 then it's 12 
        minutes = minutes < 10 ? "0"+minutes : minutes; // if minutes is 10 then it should be 09 08...
        let strTime =  hours + ":" + minutes + " " + ampm;
        return strTime;
    };
  return (
    <div>
      <p>Last update {currentTime(props.data.current.last_updated)} </p>
    </div>
  )
}

export default UpdateTime
