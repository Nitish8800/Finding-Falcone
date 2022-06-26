import "../css/App.css";
import React from "react";
import PlanetDropDown from "./PlanetDropDown";
import VehicleSelect from "./VehicleSelect";

const showStyle = {
    visibility: "",
  },
  hideStyle = {
    visibility: "hidden",
  };
const UserInput = (props) => {
  let {
    planets,
    vehicles,
    index,
    planetSelectHandler,
    vehicleSelectHandler,
    showDropDown,
    selectedPlanet,
    selectedVehicle,
  } = props;
  return (
    <div className="user-input-container">
      <div className="destination-text">Destination {index}</div>
      <div className="planets-container">
        <PlanetDropDown
          planets={planets}
          planetSelectHandler={planetSelectHandler}
          selected={(selectedPlanet && selectedPlanet.name) || []}
        />
      </div>
      <div
        className="vehicles-container"
        style={showDropDown ? showStyle : hideStyle}
      >
        <VehicleSelect
          vehicles={vehicles}
          vehicleSelectHandler={vehicleSelectHandler}
          distance={(selectedPlanet && selectedPlanet.distance) || undefined}
          selected={(selectedVehicle && selectedVehicle.name) || undefined}
        />
      </div>
    </div>
  );
};

export default UserInput;
