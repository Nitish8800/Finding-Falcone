import React from "react";
import UserInputManager from "./UserInputManager";
import TimeTracker from "./TimeTracker";
import Find from "./Find";
import { withRouter } from "react-router-dom";

const UserInputPage = (props) => {
  let {
    planets,
    vehicles,
    noOfInputs,
    planets_selected,
    vehicles_selected,
    totalTime,
    planetSelectHandler,
    vehicleSelectHandler,
    findResultHandler,
    history,
  } = props;
  return (
    <div className="home-main-container">
      <div className="home-page-title">
        Select the planets you want to search in:
      </div>
      <div className="inputs-container">
        <UserInputManager
          planets_selected={planets_selected}
          vehicles_selected={vehicles_selected}
          planets={planets}
          vehicles={vehicles}
          count={noOfInputs}
          planetSelectHandler={planetSelectHandler}
          vehicleSelectHandler={vehicleSelectHandler}
        />
      </div>
      <TimeTracker totalTime={totalTime} />
      <Find
        history={history}
        disabled={vehicles_selected.length === noOfInputs ? false : true}
        findResultHandler={findResultHandler}
      />
    </div>
  );
};

export default withRouter(UserInputPage);
