import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
