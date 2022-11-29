import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";

import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import i18n from "../../i18n";
import Select from "react-select";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language.target.value);
  };
  const options = [
    { value: "tr", label: "tr" },
    { value: "en", label: "en" },
    { value: "ru", label: "ru" },
  ];

  console.log(changeLanguage);

  return (
    <Box
      sx={{ width: "160vh" }}
      display="flex"
      justifyContent="space-between "
      p={2}
    >
      {/* search */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 3, flex: 1 }} placeholder="search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display="flex" float="left">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton>
          <select onChange={changeLanguage}>
            <option value="tr">Tr</option>
            <option value="en">En</option>
            <option value="ru">Ru</option>
            <option value="cs">Cs</option>
          </select>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

/*
          <select onChange={changeLanguage}>
            <option value="tr">Tr</option>
            <option value="en">en</option>
            <option value="ru">Ru</option>
          </select>


*/
