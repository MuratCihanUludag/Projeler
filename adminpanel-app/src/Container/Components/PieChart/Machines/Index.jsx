import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import ThemeContext from "../../../../Context/ThemeContext";

function Index() {
  const { mac } = useContext(ThemeContext);
  let ActiveMach = 0;
  let PasifMach = 0;
  mac.map((items) => (items.active ? ActiveMach++ : PasifMach++));
  let totalMach = ActiveMach + PasifMach;
  let percentMach = (100 / totalMach) * ActiveMach;

  const series = [ActiveMach, PasifMach];
  const options = {
    labels: ["ActiveMach", "PasifMach"],
    colors: ["#e9ca00", "#c3c3c3"],
    chart: {
      type: "donut",
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter: function (val) {
                return val;
              },
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: "Makinelerim",
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 100,
              color: "#373d3f",
              formatter: function () {
                return percentMach.toFixed(1);
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return <ReactApexChart options={options} series={series} type="donut" />;
}

export default Index;
