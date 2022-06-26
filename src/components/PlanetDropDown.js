import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

const { Option } = Select;
const PlanetDropDown = (props) => {
  let { planets, selected } = props;
  planets = planets.map((planet, index) => {
    let planetName = planet.name;
    return (
      <Option key={index} value={planetName}>
        {planetName}
      </Option>
    );
  });
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a planet"
      value={selected}
      optionFilterProp="children"
      onChange={props.planetSelectHandler}
      defaultValue={null}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {planets}
    </Select>
  );
};

export default PlanetDropDown;
