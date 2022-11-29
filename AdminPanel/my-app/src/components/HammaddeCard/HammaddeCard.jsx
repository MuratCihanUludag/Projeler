import React, { useState } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
function HammaddeCard({ Makineler }) {
  const [todos, setTodos] = useState(Makineler);
  const [editButton, setEditButton] = useState(0);
  const buttonKyadet = (makId) => {
    setEditButton(makId);
  };
  const changeInput = (e) => {
    e.preventDefault();
    todos[editButton].price = e.target.elements.input[editButton].value;

    setTodos([...todos], todos);
    console.log(todos);
  };

  const { t } = useTranslation();

  return (
    <div className="box">
      <form onSubmit={changeInput}>
        <table className="table ">
          <thead className="h-[60px]">
            <tr className="tr">
              <th className="th"> {t("Hammadde_Adi")} </th>
              <th className="th"> {t("Maliyet")} </th>
              <th className="th"> {t("Doviz")} </th>
              <th className="th"> # </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((items) => {
              return (
                <tr key={items.id}>
                  <td className="td tdfont  ">
                    &nbsp; <span>{items.name}</span>
                  </td>
                  <td className="bgwhite td">
                    <input
                      className="p-2"
                      defaultValue={items.price}
                      type="number"
                      name="input"
                    />
                  </td>
                  <td className="td">
                    <select>
                      <option>TRY</option>
                      <option>USD</option>
                      <option>EUR</option>
                    </select>
                  </td>
                  <td className="text-center max-w-[60px] h-[60px] px-2 th">
                    <button
                      className="bg-green-700 px-6 py-2 text-white font-serif "
                      type="submit"
                      onClick={() => buttonKyadet(items.id)}
                    >
                      {t("Kaydet")}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default HammaddeCard;
