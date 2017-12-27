import React, { Component } from "react";
import VirtualizedSelect from "react-virtualized-select";
import "react-select/dist/react-select.css";

const optionRenderer = ({ option, style, selectValue }) => (
  <div
    className="storybook-addon-scissors option"
    onClick={() => selectValue(option)}
    style={style}
    key={option.uid}
  >
    <span className="storybook-addon-scissors col name">{option.title}</span>
    <span className="storybook-addon-scissors col width">{option.width} W</span>
    <span className="storybook-addon-scissors col height">
      {option.height} H
    </span>
  </div>
);

const valueRenderer = option => (
  <div className="storybook-addon-scissors value">
    <span className="storybook-addon-scissors col name">{option.title}</span>
    <span className="storybook-addon-scissors col width">{option.width} W</span>
    <span className="storybook-addon-scissors col height">
      {option.height} H
    </span>
  </div>
);

export default ({ selectedDevice, devices, onChange }) => (
  <VirtualizedSelect
    value={selectedDevice}
    options={devices}
    onChange={onChange}
    valueKey="Device Name"
    optionRenderer={optionRenderer}
    valueRenderer={valueRenderer}
  />
);
