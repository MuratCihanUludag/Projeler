import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Topbar from "./scane/global/Topbar";
import Sidebar from "./scane/global/Sidebar";
import UretimOzeti from "./scane/UretimOzeti";
import Makineler from "./scane/Makineler";
import Ekranlarim from "./scane/Ekranlarim";
import CanliVeriler from "./scane/CanliVeriler";
import DetaylıGorunum from "./scane/DetayliGorunum";
import HamMaddeMaliyet from "./scane/HamMaddeMaliyet";
import Raporlar from "./scane/Raporlar";
//import Invoices from "./scane/invoices"
//import Contacts from "./scane/contacts"
//import Form from "./scane/form"
//import Line from "./scane/line"
//import Pie from "./scane/pie"
//import FAQ from "./scane/faq"
//import Geography from "./scane/geography"
//import Calendar from "./scane/calendar"

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="contect">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<UretimOzeti />} />
              <Route path="/Makineler" element={<Makineler />} />
              <Route path="/Ekranlarım" element={<Ekranlarim />} />
              <Route path="/CanliVeriler" element={<CanliVeriler />} />
              <Route path="/DetaylıGorunum" element={<DetaylıGorunum />} />
              <Route
                path="/HamMaddeMaliyetleri"
                element={<HamMaddeMaliyet />}
              />
              <Route path="/Raporlar" element={<Raporlar />} />

              {/* <Route path="/invoices" element={<Invoices />}/>
                <Route path="/faq" element={<FAQ />}/>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/bar" element={<Bar />}/>
                <Route path="/form" element={<Form />}/>
                <Route path="/line" element={<Line />}/>
                <Route path="/pie" element={<Pie />}/>
                <Route path="/geography" element={<Geography />}/>
                <Route path="/calendar" element={<Calendar />}/>*/}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
