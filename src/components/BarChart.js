import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
