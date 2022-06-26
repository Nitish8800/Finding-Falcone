import "../css/App.css";
import React from "react";

const TimeTracker = (props) => {
  return (
    <div className="time-tracker-container">
      <div className="time-tracker-text">Time Taken: {props.totalTime}</div>
    </div>
  );
};

export default TimeTracker;
