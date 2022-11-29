import DriveFileRenameOutline from "@mui/icons-material/DriveFileRenameOutline";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Promt({ open, close, handleName, makineId }) {
  const { t, i18n } = useTranslation();
  if (!open) return null;

  return (
    <form onSubmit={handleName}>
      <div className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex text-center justify-center ">
        <div className="bg-white w-[500px] mt-[30px] h-[280px] p-2 rounded">
          <img
            className="w-[100px] animate-pulse "
            src="https://pars-connect.com/assets/images/logo-light.png"
            alt=""
          />
          <div className="p-5">
            <h1 className="font-bold text-xl"> {t("Makine_Ismı_Duzenle")}</h1>
            <h3 className=" font-medium text-lg mt-2 mb-[10px] flex float-left">
              {t("Yeni_Makine_Adi")}
            </h3>
            <input
              id={makineId}
              name="deneme"
              className="border border-gray-300 rounded-lg p-1 "
              type="text"
            />
          </div>
          <div className="flex text-center justify-around mt-[40px]  h-[40px] ">
            <button
              type="submit"
              className=" bg-orange-700 w-[100px] rounded-lg text-white"
              
            >
              {t("Kaydet")}
            </button>
            <button
              className="bg-gray-700 w-[100px] rounded-lg text-white"
              onClick={close}
            >
              {t("Iptal")}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Promt;
