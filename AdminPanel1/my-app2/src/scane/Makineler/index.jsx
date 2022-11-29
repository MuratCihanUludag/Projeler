import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import PieChart from "../../components/PieChart";
import { Makinaler } from "../../data/Hammadde";
import { useState } from "react";
import Promt from "./Promt";
const Makineler = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [editMakine, setEditMachine] = useState(0);
  const [name, setName] = useState(Makinaler);
  const handleName = (e) => {
    e.preventDefault();

    console.log("deneme");
    name[editMakine].name = e.target.elements.deneme.value;
    setName([...name], name);
    const handleClose = () => {
      setOpen(false);
    };
    return handleClose();
  };

  const handleClick = (e) => {
    setOpen(false);
  };

  const sayfaAc = (makId) => {
    setOpen(true);
    setEditMachine(makId);
  };

  return (
    <Box m="20px">
      <Header title={t("makineler")} subtitle={t("makineListesi")} />
      <div className=" p-4 ">
        <div className=" mx-auto grid grid-cols-3 gap-6 ">
          <div className="flex justify-center bg-gray-100 overflow-auto">
            <div className="overflow-hidden p-1.5 w-full inline-block align-middle border rounded-lg ">
              <PieChart />
              <div className="  text-center">
                <h1 className="text-green-500 font-serif text-xl p-4" >Tüm Makinelerde Aktif verim </h1>
                <h2 className="text-2xl pb-4 font-mono " >225,00 KG/S</h2>
                <div className="flex justify-between mx-5 p-4">
                  <div className=" font-serif text-lg">
                    <h1 className="text-blue-600" >Toplam Makine</h1>
                    <p>4</p>
                  </div>
                  <div className=" font-serif text-lg" >
                    <h1 className="text-green-500" >Toplam Makine</h1>
                    <p>4</p>
                  </div>
                  <div className=" font-serif text-lg " >
                    <h1 className="text-red-400" >Toplam Makine</h1>
                    <p>4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-2 ">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          {t("durum")}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          {t("ad")}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          {t("aktifVerim")}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          {t("hedefVerim")}
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                        >
                          {t("duzenle")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200  ">
                      {Makinaler.map((item) => {
                        return (
                          <tr key={item.id} id={item.id} className="hover:bg-gray-200 " >
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center ">
                              {item.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                              {item.name}{" "}
                            </td>
                            <td className="px-6 py-4 text-sm text-blue-800 whitespace-nowrap text-center">
                              {item.ExtruderA[0].aktifVerim} kg/s
                            </td>
                            <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                              <a
                                className="text-green-500 hover:text-green-700"
                                href="#"
                              >
                                80.00.kg/s
                              </a>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                              <a className="text-black hover:text-red-700">
                                <DriveFileRenameOutlineIcon
                                  id={item.id}
                                  onClick={() => sayfaAc(item.id)}
                                />

                                <Promt
                                  open={open}
                                  close={handleClick}
                                  handleName={handleName}
                                  makineId={editMakine}
                                />
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Makineler;

/*

  const handleName = (e) => {
    e.preventDefault();
    Makinaler.map((items) => {
      items.id === parseInt(e.target.id) && (items.name = e.target.value);
    });
    setName([...name], name);
    console.log(name);
  };




*/
