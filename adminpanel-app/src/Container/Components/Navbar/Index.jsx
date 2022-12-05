import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";

function Index() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
