import React, { useContext, useState } from "react";
import ReactApexChart from "react-apexcharts";
import ThemeContext from "../../../../Context/ThemeContext";

function Index() {
  const { macApi, machineId } = useContext(ThemeContext);
  const [Exturders] = useState(macApi[machineId].extruders);

  const series = Exturders.map((items) => items.targetCapacity);
  const options = {
    labels: Exturders.map((items) => items.no),
    theme: {
      palette: "pallete1",
    },

    chart: {
      type: "donut",
    },
    legend: {
      show: true,
      position: "bottom",
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
              show: false,
              showAlways: true,
              label: "Makinelerim",
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 100,
              color: "#373d3f",
              formatter: function () {
                return;
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
