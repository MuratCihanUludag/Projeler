import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContexProvider } from "./context/AuthContex";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProdectedRouter from "./components/ProdectedRouter";

function App() {
  return (
    <div>
      <AuthContexProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProdectedRouter>
                <Account />
              </ProdectedRouter>
            }
          />
        </Routes>
      </AuthContexProvider>
    </div>
  );
}

export default App;
