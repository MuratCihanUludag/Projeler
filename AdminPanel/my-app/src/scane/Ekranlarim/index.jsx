import { Box } from "@mui/material";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
const Ekranlarim = () => {
  const {t,i18n}= useTranslation()
  return (
    <Box m="20px">
      <Header title={t("ekranlar")} subtitle={t("makineDurumu")} />
      <Box className="flex" m="40px 0 0 0" height="75vh">
        <div className="flex justify-around">
          <img
            src="https://picsum.photos/200/300"
            style={{ paddingRight: "100px", paddingLeft: "100px" }}
            alt=""
          />
          <img src="https://picsum.photos/200/300" alt="" />  
        </div>
      </Box>
    </Box>
  );
};

export default Ekranlarim;
