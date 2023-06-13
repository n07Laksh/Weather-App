import React, { useState, useEffect } from 'react';

const RealDateTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(realTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const realTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${day}-${monthName[month]}-${year} ${hour}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className='container text-light'>
      <div>Today {currentTime}</div>
    </div>
  );
};

export default RealDateTime;

