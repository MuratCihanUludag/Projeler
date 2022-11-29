import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

function LineChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      foreColor: colors.grey[100],
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
          
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        width="440px"
      />
    </div>
  );
}

export default LineChart;
