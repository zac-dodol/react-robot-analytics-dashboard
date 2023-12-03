import React, { useState } from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import DropdownMenu from "./components/DropdownMenu";
import RobotCountWidget from "./components/RobotCountWidget";
import mockData from "./data/mockData.json";
import Chart from "chart.js/auto";

const App = () => {
  const [selectedMetric, setSelectedMetric] = useState("metric1");

  const options = [
    { label: "Metric 1", value: "metric1" },
    { label: "Metric 2", value: "metric2" },
  ];

  return (
    <div className="App m-4">
      <h1 className="mb-4">Robot Operation Analytics Dashboard</h1>

      <div className="d-flex flex-column gap-2 mb-4">
        <DropdownMenu options={options} onChange={setSelectedMetric} />
        <RobotCountWidget count={mockData[selectedMetric].robotCount} />
      </div>

      <div className="d-flex gap-4 flex-wrap">
        <LineChart data={mockData[selectedMetric].lineChartData} />
        <BarChart data={mockData[selectedMetric].barChartData} />
        <PieChart data={mockData[selectedMetric].pieChartData} />
      </div>
    </div>
  );
};

export default App;
