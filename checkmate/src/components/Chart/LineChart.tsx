import React from "react";
import { Line } from "react-chartjs-2";

import "chart.js/auto";
import { height } from "@mui/system";

const LineChart = () => {
  const data = {
    labels: ["섭취 직후", "1H", "2H", "3H", "4H", "5H"],
    datasets: [
      {
        label: "혈당 예측",
        data: [20, 35, 40, 80, 93, 100],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
