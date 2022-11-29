import React, { useState } from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import "./style.css";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import DoneIcon from "@mui/icons-material/Done";

import { Makinaler } from "../../data/Hammadde";

import { useTranslation } from "react-i18next";

export default function CanliVeriler() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [sayfaId, setSayfaId] = useState(0);
  const SayfaAc = (sId) => {
    setSayfaId(sId);
  };

  const { t } = useTranslation();

  function createData(name, HedefDeger, AktifDeger) {
    if (HedefDeger > AktifDeger) {
      AktifDeger = [
        AktifDeger,
        <ArrowUpwardOutlinedIcon
          key={1}
          className="animate-pulse"
          sx={{
            display: "inline-flex",
            position: "absolute",
            width: "1.5em",
            color: colors.blueAccent[400],
          }}
        />,
      ];
    }
    if (HedefDeger < AktifDeger) {
      AktifDeger = [
        AktifDeger,
        <ArrowDownwardOutlinedIcon
          key={2}
          className="animate-pulse"
          sx={{
            display: "inline-flex",
            position: "absolute",
            width: "1.5em",
            color: colors.redAccent[500],
          }}
        />,
      ];
    }
    if (HedefDeger === AktifDeger) {
      AktifDeger = [
        AktifDeger,
        <DoneIcon
          key={3}
          sx={{
            display: "inline-flex",
            position: "absolute",
            width: "1.5em",
            color: colors.greenAccent[500],
          }}
        />,
      ];
    }

    return { name, HedefDeger, AktifDeger };
  }

  const rows = [
    createData(`${t("verim")}`, 159, 6.0),
    createData(`${t("gramaj")}`, 9.0, 9.0),
    createData(`${t("kalınlık")}`, 262, 300),
    createData(`${t("hatHızı")}`, 305, 3.7),
  ];

  return (
    <Box m="17px">
      <Header title={`${t("canlıVeriler")}`} />
      <div className="bg-gray-100">
        <div className="grid grid-cols-2 gap-4 max-w-[1240px] mx-auto  ">
          {Makinaler.map((items, index) => {
            return (
              <table key={items.id} className="tableC">
                <thead className="">
                  <tr className="trC">
                    <th className="thNoneBorder" align="left" colSpan={2}>
                      {items.name}
                    </th>
                    <th className="thNoneBorder" style={{ textAlign: "right" }}>
                      <Link
                        className="md:text-2xl text-[#e3af06f0] text-lg"
                        to="/DetaylıGorunum"
                        id={items.id}
                        onClick={() => console.log(SayfaAc(items.id))}
                      >
                        {t("detaylıGorunum")}
                      </Link>
                    </th>
                  </tr>

                  <tr className="trC ">
                    <th
                      className=""
                      style={{
                        color: colors.grey[300],
                        fontSize: "17px",
                      }}
                    ></th>
                    <th
                      className="thCbgreen"
                      style={{
                        color: colors.greenAccent[300],
                      }}
                    >
                      {t("hedefDeger")}
                    </th>
                    <th className="thCblue">{t("aktifDeger")}</th>
                  </tr>
                </thead>
                <tbody className="tbodyC" >
                  {rows.map((row) => (
                    <tr className="trC"  key={row.name}>
                      <td className="tdC tdCyellow ">{row.name}</td>

                      <td
                        className="tdC"
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {row.HedefDeger}
                      </td>

                      <td
                        className="tdC "
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {row.AktifDeger}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    </Box>
  );
}

/*  






*/
