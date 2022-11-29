import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useTranslation } from "react-i18next";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t, i18n } = useTranslation();
  const series = [25, 25, 25, 25];
  const options = {
    series: [44, 55, 13, 33],
    labels: ["Apple", "Mango", "Orange", "Watermelon"],
    title: { text: "Makine Durum" },
    theme: {
      mode: "light",
      palette: "palette3",
    },
    plotOptions: {
      pie: {
        donut: {
          dataLabels: {
            offset: -5,
          },
          labels: {
            show: true,
            total: {
              show: true,
              label: "Makinelerim",
              color: "gray",
            },
            value: {
              show: true,
            },
          },
        },
      },
    },

    legend: {
      show: false,
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default PieChart;
