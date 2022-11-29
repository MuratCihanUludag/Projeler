import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { Makinaler } from "../../data/Hammadde";
import {useTranslation} from "react-i18next"
function Index() {
  const {t} = useTranslation();
  const [formData, setFormData] = useState(Makinaler);
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    setFormData(data);
    console.log(data);
  };

  return (
    <Box m="20px">
      <Box>
        <Header title={t("Raporlar")} />
        <Box>
          <div className="flex tex-center  mx-auto">
            <div className=" grid grid-cols-2 gap-8 w-full ">
              <div className=" ml-4 bg-gray-100">
                <div className="p-10">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {" "}
                    <h1 className="text-2xl font-italic p-3 "> {t("Rapor_Olustur")} </h1>
                    <p className="mt-5 p-3 text-lg"> {t("makine")} </p>
                    <select
                      {...register("makine")}
                      className="max-w-[500px] p-2 mx-auto border border-gray-300  text-lg text-gray-400 flex rounded-lg"
                      name="makine"
                      id=""
                    >
                      {Makinaler.map((item) => {
                        return (
                          <option
                            defaultValue={item.name}
                            key={item.id}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                    <p className="text-lg p-4 mt-5 "> {t("Rapor_Ismi")} </p>
                    <input
                      {...register("raporIsmi")}
                      name="raporIsmi"
                      className="max-w-[500px] p-2 mx-auto border flex border-gray-300 text-lg text-gray-400 rounded-lg"
                      placeholder={t("Rapor_Ismi")}
                      type="text"
                    />
                    <p className="mt-5 p-3 text-lg"> {t("Rapor_Turu")} </p>
                    <select
                      {...register("raporTur")}
                      className="max-w-[500px] p-2 mx-auto border border-gray-300  text-lg text-gray-400 flex rounded-lg"
                      name="raporTur"
                      id=""
                    >
                      <option> {t("Anlik_Rapor")} </option>
                      <option> {t("Zamanli_Rapor")} </option>
                    </select>
                    <p className="mt-5 p-3 text-lg"> {t("Mail_Adresi")} </p>
                    <input
                      {...register("mail")}
                      type="email"
                      name="mail"
                      id=""
                      className="max-w-[500px] p-2 mx-auto border flex border-gray-300 text-lg text-gray-400 rounded-lg"
                      placeholder="E-Posta"
                    />
                    <button
                      type="submit"
                      className="flex mx-auto p-3 rounded-lg mt-5 mb-5 bg-blue-400 text-white text-lg hover:bg-blue-800  "
                    >
                     {t("Rapor_Olustur")}
                    </button>
                  </form>
                </div>
              </div>
              <div className="ml-4 bg-gray-100">
                <div className="p-10">
                  {" "}
                  <h1 className="text-2xl font-italic p-3"> {t("Gecmis_Raporlar")} </h1>
                  <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                      <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                              >
                                {t("Rapor_Ismi")}
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                              >
                                {t("Rapor_Turu")}
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                              >
                                {t("makine")}
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                              >
                                {t("Tarih")}
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                              >
                                {t("duzenle")}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                                {formData.raporIsmi}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                                {formData.raporTur}
                              </td>
                              <td className="px-6 py-4 text-sm text-blue-800 whitespace-nowrap text-center">
                                {" "}
                                {formData.makine}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center"></td>
                              <td className="px-6 py-4 text-sm font-medium  whitespace-nowrap text-center">
                                <a className="text-black hover:text-red-700"></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
