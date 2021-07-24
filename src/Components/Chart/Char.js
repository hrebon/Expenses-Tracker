import React from "react";
import ChartBar from "./ChartBar";
import "./char.css";

const Char = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
         />
      ))}
    </div>
  );
};

export default Char;
