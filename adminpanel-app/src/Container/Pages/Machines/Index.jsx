import React, { useContext, useState } from "react";
import "./machine.css";
import PieChart from "../../Components/PieChart/Machines/Index";
import Prompt from "./Prompt";
import ThemeContext from "../../../Context/ThemeContext";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PowerIcon from "@mui/icons-material/Power";
import PowerOffIcon from "@mui/icons-material/PowerOff";
import CreateIcon from "@mui/icons-material/Create";
/*
Aktif-Pasif icons v2
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
*/
function Index() {
  const { mac, setMac } = useContext(ThemeContext);
  /*PieChart Calculate Start*/
  let AktifMachine = 0;
  let PasifMachine = 0;
  mac.map((items) => {
    let total = items.active ? AktifMachine++ : PasifMachine++;
    return total;
  });
  let TotalMachine = AktifMachine + PasifMachine;
  /*PieChart Calculate End*/
  /*Table-Start*/
  const [openPage, setOpenPage] = useState(false);
  const [editMach, setEditMach] = useState(0);
  const PageUp = (MachId) => {
    setOpenPage(!openPage);
    setEditMach(MachId);
  };
  const handleForm = (e) => {
    e.preventDefault();
    mac[editMach].name = e.target.elements.machinaName.value;
    setMac([...mac], mac);
    setOpenPage(false);
  };
  console.log(openPage);

  /*Table-End*/
  return (
    <div className="Machine">
      <h1>Makinelerim</h1>
      <div className="MachineContainer">
        <div className="PieChart">
          <div className="texttop">
            <p>Machine Durumu</p>
          </div>
          <PieChart />
          <div className="textbottom">
            <p className="phead">Tüm Makineler Aktif Verim</p>
            <p className="pnumber">185,00 KG/S</p>
            <div className="machineoptions">
              <div className="textblue">
                <h4>Toplam Makine</h4>
                <p>
                  {" "}
                  <CenterFocusWeakIcon /> <span>{TotalMachine}</span>{" "}
                </p>
              </div>
              <div className="textgreen">
                <h4>Aktif Makine</h4>
                <p>
                  {" "}
                  <ArrowUpwardIcon /> <span>{AktifMachine}</span>{" "}
                </p>
              </div>
              <div className="textred">
                <h4>Pasif Makine</h4>
                <p>
                  {" "}
                  <ArrowDownwardIcon /> <span>{PasifMachine}</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tableContainer">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <h4 className="h4">Makine Listesi</h4>
                </th>
              </tr>
            </thead>
            <thead className="thead">
              <tr className="tr">
                <th className="column1">Durum</th>
                <th className="column1">Ad</th>
                <th className="column1">Aktif Verim</th>
                <th className="column1"> Hedef Verim </th>
                <th className="column1">Düzenle</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {mac.map((items, index) => {
                return (
                  <tr key={index} className="tr">
                    <td className="column1">
                      {items.active ? (
                        <PowerIcon className="columnActive" />
                      ) : (
                        <PowerOffIcon className="columnPasif" />
                      )}
                    </td>
                    <td className="column2">{items.name}</td>
                    <td className="column1">{items.ExtruderA[0].aktifVerim}</td>
                    <td className="column1">
                      {items.ExtruderA[0].targetVerim}
                    </td>
                    <td className="column1">
                      <CreateIcon
                        id={items.id}
                        onClick={() => PageUp(items.id)}
                      />
                      <Prompt
                        open={openPage}
                        close={() => setOpenPage(false)}
                        handleForm={handleForm}
                        machineId={editMach}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Index;
