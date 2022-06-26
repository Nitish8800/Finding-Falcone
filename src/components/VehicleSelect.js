import React from "react";
import { Radio } from "antd";
import "antd/dist/antd.css";

const optionStyleObj = {
  display: "block",
  height: "30px",
};
const VehicleSelect = (props) => {
  let { vehicles, vehicleSelectHandler, distance, selected } = props,
    handleVechicleSelection = (evt) => {
      vehicleSelectHandler(distance, evt.target.value);
    };
  vehicles = vehicles.map((vehicle, index) => {
    let vehicleName = vehicle.name,
      vehicleCount = vehicle.total_no,
      maxDistance = vehicle.max_distance;
    return (
      <Radio
        key={index}
        value={vehicleName}
        style={optionStyleObj}
        disabled={vehicleCount && maxDistance >= distance ? false : true}
      >
        {`${vehicleName}(${vehicleCount})`}
      </Radio>
    );
  });
  return (
    <Radio.Group onChange={handleVechicleSelection} value={selected}>
      {vehicles}
    </Radio.Group>
  );
};

export default VehicleSelect;
