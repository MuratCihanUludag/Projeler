import React, { useContext } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import ThemeContext from "../../../Context/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import ComputerIcon from "@mui/icons-material/Computer";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SpokeIcon from "@mui/icons-material/Spoke";

function Index() {
  const { toggle, isOpen } = useContext(ThemeContext);
  return (
    <div style={{ width: isOpen ? "300px" : "80px",}} className="sidebar">
      <div className="top">
        {" "}
        <span className="logo">
          <img
            style={{ display: isOpen ? "flex" : "none"}}
            className="img"
            src="https://pars-connect.com/assets/images/logo-light.png"
            alt="ParsContorl"
          />

          <MenuIcon className="icon" onClick={toggle} />
        </span>
      </div>

      <div className="center">
        <ul>
          <p className="title">Uretim</p>

          <Link className="li" to="/">
            <CenterFocusWeakIcon className="icon" />
            <span style={{ display: isOpen ? "flex" : "none" }}>
              Makinelerim
            </span>
          </Link>

          <Link className="li" to="/">
            <ComputerIcon className="icon" />
            <span style={{ display: isOpen ? "flex" : "none" }}>
              Ekranlarım
            </span>
          </Link>
          <Link className="li" to="/livedata">
            <StackedBarChartIcon className="icon" />
            <span style={{ display: isOpen ? "flex" : "none" }}>
              Canlı Veriler
            </span>
          </Link>
          <Link className="li" to="/">
            <ListAltIcon className="icon" />
            <span style={{ display: isOpen ? "flex" : "none" }}>Raporlar</span>
          </Link>
          <Link className="li" to="/">
            <AttachMoneyIcon className="icon" />
            <span style={{ display: isOpen ? "flex" : "none" }}>
              {" "}
              Hammade Maliyet
            </span>
          </Link>
          <p className="title">CRM</p>
          <Link className="li" to="/">
            <SpokeIcon className="icon" />
            <span style={{ display: isOpen ? "flex" : "none" }}> Pars CRM</span>
          </Link>
        </ul>
      </div>
      <div className="bottom"> </div>
    </div>
  );
}

export default Index;

/* logo= https://www.parscontrol.com.tr/uploads/image/homepost16082206180825.png   */
