import React, { useState } from "react";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Box, Grid } from "@mui/material";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import HammaddeCard from "../../components/HammaddeCard/HammaddeCard";

import { Makinaler } from "../../data/Hammadde";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const HamMaddeMaliyet = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const HamMaddeButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 40px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#ffb204",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: colors.yellow[500],
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: colors.redAccent[500],
      borderColor: colors.redAccent[500],
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });
  const [show, setShow] = useState({ Makinaler });

  return (
    <Box m="20px">
      <Header title="Maliyetler" />
      <Box>
        <Grid sx={{ backgroundColor: colors.primary[400] }} container>
          <Grid item xs={2}>
            <CardContent sx={{ display:"flex", justifyContent:"center"}} >
              <Typography sx={{ flexDirection: "column", display: "flex",margin:"10px", width:"200px", }}>
                {Makinaler.map((item) => {
                  return (
                    <HamMaddeButton
                      key={item.id}
                      sx={{ margin: "5px" }}
                      variant="contained"
                      disableRipple
                      onClick={() => {
                        setShow(item.id);
                      }}
                    >
                      {" "}
                      {item.name}{" "}
                    </HamMaddeButton>
                  );
                })}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={9}>
            <Typography component={"span"} variant={"table"}>
              {Makinaler.map((item) => {
                return (
                  show === item.id && (
                    <HammaddeCard key={item.id} Makineler={item.urunler} />
                  )
                );
              })}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HamMaddeMaliyet;
