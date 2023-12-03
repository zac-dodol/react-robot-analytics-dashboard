import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
