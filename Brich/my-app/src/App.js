//Pages
import Main from "./Pages/Home/Main/Main";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
//Components
import Navbar from "./Components/Navbar";
//react-router-dom
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-lime-700 bg-gradient-to-r from-green-900" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
