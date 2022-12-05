import React from "react";
import "./container.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Index";
import Navbar from "./Components/Navbar/Index";
import Machines from "./Pages/Machines/Index";
import LiveData from "./Pages/LiveData/Index"
import DetaildView from "./Pages/LiveData/Detailed View/Index"

function Container() {
  return (
    <div className="home">
      <Sidebar />

      <div className="homeContainer">
        <Navbar />
        <div className="homePosition">
          <Routes>
            <Route path="/" element={<Machines />} />
            <Route path="/livedata" element={<LiveData />} />
            <Route path="/detaildview" element={<DetaildView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Container;
