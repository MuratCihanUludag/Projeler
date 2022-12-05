import React, { useContext } from "react";
import "./liveData.css";
import ThemeContext from "../../../Context/ThemeContext";
import { Link } from "react-router-dom";

function Index() {
  const { mac, macApi, PageUp } = useContext(ThemeContext);

  return (
    <div className="liveData">
      <h1>Canli Veriler</h1>
      <div className="liveDataContainer">
        {mac.map((items, index) => {
          return (
            <div key={index} className="liveDataBg">
              <div className="livedataFlex">
                <h3> {items.name} </h3>
                <Link
                  className="Link"
                  to="/detaildview"
                  id={items.id}
                  onClick={() => PageUp(items.id)}
                >
                  {" "}
                  Detaylı Görünüm
                </Link>
              </div>
              <div className="liveDataTableContanier">
                <table className="table">
                  <thead className="thead">
                    <tr className="tr">
                      <td className="column1">&nbsp;</td>
                      <th className="column1">Hedef Değer</th>
                      <th className="column1">Aktif Değer</th>
                    </tr>
                  </thead>
                  <tbody className="tbody">
                    <tr id={items.id} className="tr">
                      <td className="tdyellow">Verim:</td>
                      <td className="tdgreen" id={items.id}>
                        {macApi[items.id].activeCapacity}
                      </td>
                      <td className="tdblue" id={items.id}>
                        {macApi[items.id].targetCapacity}
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="tdyellow">Grmaj:</td>
                      <td className="tdgreen" id={items.id}>
                        {macApi[items.id].activeGrammage}
                      </td>
                      <td className="tdblue" id={items.id}>
                        {macApi[items.id].targetGrammage}
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="tdyellow">Kalınlık:</td>
                      <td className="tdgreen" id={items.id}>
                        {macApi[items.id].activeThickness}
                      </td>
                      <td className="tdblue" id={items.id}>
                        {macApi[items.id].targetThickness}
                      </td>
                    </tr>
                    <tr className="tr">
                      <td className="tdyellow">Hat Hızı:</td>
                      <td className="tdgreen" id={items.id}>
                        {macApi[items.id].activeLineSpeed}
                      </td>
                      <td className="tdblue" id={items.id}>
                        {macApi[items.id].targetLineSpeed}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
