import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  // states to handle changing time
  const [time, setTime] = useState(getTime());
  // const [time, setTime] = useState({});

  // Handler function to get the time object
  function getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am',
    };
  }
  // Here the getTime() will return an object for the state "time" it will look like
  // {
  //   hours:11,
  //   minutes:8,
  //   seconds:11,
  //   ampm: "am"
  // }

  // Handler function to update the clock
  function updateClock() {
    setTime(getTime());
  }

  // Update the timer after 1 seconds
  useEffect(() => {
    const timerId = setTimeout(updateClock, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [updateClock]);

  // ES6 destructuring
  const { hours, minutes, seconds, ampm } = time;
  return (
    <div className="clock">
      {hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}:
      {minutes > 9 ? minutes : `0${minutes}`}:
      {seconds > 9 ? seconds : `0${seconds}`} {ampm}
    </div>
  );
}
