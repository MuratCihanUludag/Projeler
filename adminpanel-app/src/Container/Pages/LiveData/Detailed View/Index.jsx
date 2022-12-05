import React, { useContext, useState } from "react";
import "./detailedView.css";
import ThemeContext from "../../../../Context/ThemeContext";
import DoneIcon from "@mui/icons-material/Done";
import PieChart from "../../../Components/PieChart/Detailed View/Index";
import ListIcon from "@mui/icons-material/List";

function Index() {
  const { macApi, machineId } = useContext(ThemeContext);
  const [rawMaterrials] = useState(
    macApi[machineId].extruders[0].rawMaterrials
  );
  const [Exturders] = useState(macApi[machineId].extruders);
  const [open, setOpen] = useState(false);
  const [mId, setMId] = useState(0);
  const PageOpen = (Id) => {
    setMId(Id);
    setOpen(!open);
  };
  console.log(mId)

  return (
    <div className="detailedView">
      <h1>Detaylı Görünüm</h1>
      <div className="detailedViewCardContiner">
        {/* Aktif-Verim-Start  */}
        <div className="detailedViewCard">
          <h3>Aktif Verim</h3>
          <p>
            {" "}
            {macApi[machineId].activeCapacity} <span>Kg/s</span>{" "}
          </p>
          <div className="detailedViewCardBottom">
            <p>Hedef:{macApi[machineId].activeCapacity}Kg/s</p>
            <p className="icon">
              {" "}
              <DoneIcon style={{ fontSize: "16px" }} /> &nbsp; <span>100%</span>{" "}
            </p>
          </div>
        </div>
        {/* Aktif-Verim-End  */}
        {/* Aktif-Gramj-Start  */}
        <div className="detailedViewCard">
          <h3>Aktif Gramaj</h3>
          <p>
            {" "}
            {macApi[machineId].activeGrammage} <span>gr/m</span>{" "}
          </p>
          <div className="detailedViewCardBottom">
            <p>Hedef:{macApi[machineId].targetGrammage}gr/m</p>
            <p className="icon">
              {" "}
              <DoneIcon style={{ fontSize: "16px" }} /> &nbsp; <span>100%</span>{" "}
            </p>
          </div>
        </div>
        {/* Aktif-Gramj-End  */}
        {/* Active-Thickness-Start  */}
        <div className="detailedViewCard">
          <h3>Aktif Kalınlık</h3>
          <p>
            {" "}
            {macApi[machineId].activeThickness} <span>μ</span>{" "}
          </p>
          <div className="detailedViewCardBottom">
            <p>Hedef:{macApi[machineId].targetLineSpeed}μ</p>
            <p className="icon">
              {" "}
              <DoneIcon style={{ fontSize: "16px" }} /> &nbsp; <span>100%</span>{" "}
            </p>
          </div>
        </div>
        {/* Active-Thickness-End  */}
        {/* Active-LineSpeed-Start  */}
        <div className="detailedViewCard">
          <h3> Hat Hızı</h3>
          <p>
            {" "}
            {macApi[machineId].activeLineSpeed} <span>m/dk</span>{" "}
          </p>
          <div className="detailedViewCardBottom">
            <p>Hedef:{macApi[machineId].targetLineSpeed}m/dk</p>
            <p className="icon">
              {" "}
              <DoneIcon style={{ fontSize: "16px" }} /> &nbsp; <span>100%</span>{" "}
            </p>
          </div>
        </div>
        {/* Active-LineSpeed-End  */}
        {/* FilmWith-Start  */}
        <div className="detailedViewCard">
          <h3>Flim Genişliği</h3>
          <p>
            {" "}
            {macApi[machineId].filmWith} <span>mm</span>{" "}
          </p>
        </div>
        {/* FilmWith-End  */}
        {/*Time-Start */}
        <div className="detailedViewCard">
          <h3>Zaman</h3>
          <p>
            {" "}
            {macApi[machineId].time} <span></span>{" "}
          </p>
        </div>
        {/*Time-End */}
      </div>
      <div className="detailedViewBottomContiner">
        <div className="RecipeInformation">
          <div className="RecipeFlexTop">
            <span>Reçete Bilgisi</span>
            <span className="blue">Hammadde Maliyet</span>
          </div>
          <p className="BottomText">Tüketilen Hammaddeler</p>
          <table className="DetailedViewTable">
            <thead>
              <tr>
                <th>Hammadde Adı</th>
                <th> Toplam Tüketim</th>
                <th> Maliyet (Kg)</th>
                <th> Tüketim Maliyet</th>
              </tr>
            </thead>
            {rawMaterrials.map((items, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{items.name}</td>
                    <td>{items.totalConsumption}</td>
                    <td>{items.cost}</td>
                    <td>{items.consumptionCost}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>

        <div className="Piechart">
          <p>Extruder Oranlari</p>
          <PieChart />
        </div>
      </div>
      {Exturders.map((items,index) => {
        return (
          <div className="Exturders" id={index}>
            <div className="ExturdersFlex">
              <p>ExturderA</p>
              <p>
                <ListIcon id={items.id} onClick={()=> PageOpen(items.no)} />
              </p>
            </div>
            <div>Deneme</div>
          </div>
        );
      })}
    </div>
  );
}

export default Index;
