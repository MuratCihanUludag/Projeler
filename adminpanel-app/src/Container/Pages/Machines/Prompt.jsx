import React from "react";
import "./promt.css";

function Prompt({ open, close, handleForm, machineId }) {
  if (!open) return null;
  return (
    <form onSubmit={handleForm} className="overlay">
      <div className="modalContainer">
        <div className="editTop">
          <span className="editMachine">Makine Adı Giriniz</span>
          <button className="closebtn" onClick={close}>
            x
          </button>
        </div>
        <div className="editBottom">
          <input  id={machineId} name="machinaName" className="promtInput" type="text" />
          <div className="bottomBtn">
            <button type="submit"  className="SaveBtn">
              Kaydet
            </button>
            <button onClick={close} className="CancelBtn">
              İptal
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Prompt;
