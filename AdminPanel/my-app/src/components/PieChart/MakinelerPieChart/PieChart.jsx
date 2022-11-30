import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Makinaler } from "../../../data/Hammadde";

const PieChart = () => {
  const [durum, setDurum] = useState(Makinaler);
  let makineDurumu = 0;
  let toplamMakine = durum.length;
  const MakineDurum = () => {
    durum.filter((items) => {
      if (!!items.aktif) {
        makineDurumu++;
      }
    });
  };
  MakineDurum();
  const series = [toplamMakine - makineDurumu, makineDurumu];
  const options = {
    labels: ["Pasif Makine ", "Aktif Makine"],
    title: { text: "Makine Durum" },
    dataLabels: {
      enabled: false,
    },
    colors: ["#C2C1B5","#EBD70E" ],
    theme: {
      mode: "light",
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
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
              enabled: true,

              formatter: function (val) {
                return ((makineDurumu * 100) / toplamMakine).toFixed(1) + "%";
              },
            },
            value: {},
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
