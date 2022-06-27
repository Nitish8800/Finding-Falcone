import React, { useEffect } from "react";
import "../css/App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserInputPage from "./UserInputPage";
import {
  setToken,
  setVehicles,
  setPlanets,
  selectPlanet,
  selectVehicle,
  findFalcone,
  setTotalTime,
  resetSelectionState,
} from "../actions";
import ResultPage from "./ResultPage";

const Home = (props) => {
  let {
    planets,
    vehicles,
    noOfInputs,
    result,
    totalTime,
    selected_planets,
    selected_vehicles,
  } = props;
  useEffect(() => {
    props.setToken();
    props.setVehicles();
    props.setPlanets();
  }, []);
  // handler for selecting a planet from  then dropdown
  const planetSelectHandler = (value) => {
    props.selectPlanet(value);
  };
  // handler for selecting a vehicle from the radio button list
  const vehicleSelectHandler = (planetDistance, vehicleName) => {
    let vehiclesSpeed = props.vehicles.find(
        (vehicle) => vehicle.name === vehicleName
      ).speed,
      timeTaken = planetDistance / vehiclesSpeed;
    props.selectVehicle(vehicleName);
    props.setTotalTime(props.totalTime + timeTaken);
  };
  // handler for the find button
  const findResultHandler = async () => {
    let { selected_planets, selected_vehicles, token, findFalcone } = props;
    // call the action to find the result
    await findFalcone({
      token,
      planet_names: selected_planets,
      vehicle_names: selected_vehicles,
    });
  };

  return (
    <Router>
      <Switch>
        <Route path="/result">
          <ResultPage
            result={result}
            totalTime={totalTime}
            resetSelectionState={props.resetSelectionState}
          />
        </Route>
        <Route path="/">
          <UserInputPage
            noOfInputs={noOfInputs}
            planets={planets || []}
            vehicles={vehicles || []}
            planets_selected={selected_planets || []}
            vehicles_selected={selected_vehicles || []}
            totalTime={totalTime || 0}
            vehicleSelectHandler={vehicleSelectHandler}
            findResultHandler={findResultHandler}
            planetSelectHandler={planetSelectHandler}
          />
        </Route>
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: async () => {
      // action for setting the token
      await setToken(dispatch);
    },
    setVehicles: async () => {
      // action for setting the total vehicles available initially
      await setVehicles(dispatch);
    },
    setPlanets: async () => {
      // action for setting the total planets available initially
      await setPlanets(dispatch);
    },
    findFalcone: async (req) => {
      // action for finding the search result
      await findFalcone(dispatch, req);
    },
    selectPlanet: (data) => selectPlanet(dispatch, data), // action for selecting a planet,
    selectVehicle: (data) => selectVehicle(dispatch, data), // action for selecting a vehicle
    setTotalTime: (time) => {
      setTotalTime(dispatch, time);
    }, // action for calculating total time
    resetSelectionState: async () => {
      // action for resetting the selection state of the store
      await resetSelectionState(dispatch);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    token: state.token,
    planets: state.planets,
    vehicles: state.vehicles,
    selected_planets: state.selected_planets,
    selected_vehicles: state.selected_vehicles,
    result: state.result,
    totalTime: state.totalTime,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
