import { createContext, useState } from "react";
import { Makineler, Parsconnectapi } from "../Data/ParsCont";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  /* sidebar open-close start */
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  /* sidebar open-close end */
  /*Data Machine Start */
  const [mac, setMac] = useState(Makineler);
  /*Data Machine End */
  /*Data ParsConnectApi Start  */
  const [macApi, setMacApi] = useState(Parsconnectapi);
  /*Data ParsConnectApi End  */
  const [machineId, setMachineId] = useState(0);
  /* RawMaterrials-Start  */

  /* RawMaterrials-End  */

  const PageUp = (MakId) => {
    setMachineId(MakId);
  };

  const values = {
    isOpen,
    setIsOpen,
    toggle,
    mac,
    setMac,
    macApi,
    setMacApi,
    machineId,
    setMachineId,
    PageUp,
  };
  return (
    <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>
  );
};

export default ThemeContext;
