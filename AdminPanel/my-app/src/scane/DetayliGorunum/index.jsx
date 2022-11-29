import React from "react";
import Header from "../../components/Header";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DoneIcon from "@mui/icons-material/Done";
import LineChart from "../../components/LineChart2";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart2";
import { CardActionArea } from "@mui/material";
import { tokens } from "../../theme";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";

import { useTranslation } from "react-i18next";

function DetaylıGorunum() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: colors.primary[400],
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box m="20px">
      <Header title={t("detaylıGorunum")} />
      <Grid container spacing={4} columns={17}>
        <Grid xs={8}>
          <Item>
            <Card sx={{ backgroundColor: colors.primary[400] }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{
                      display: "flex",
                      color: colors.greenAccent[500],
                      fontWeight: "bold",
                    }}
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    {t("aktifVerim")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "40px", color: colors.grey[400] }}
                  >
                    90.00{" "}
                    <span
                      style={{
                        color: colors.greenAccent[500],
                        fontWeight: "bold",
                      }}
                    >
                      {t("kg/s")}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "block",
                      margin: "5px",
                      p: "10px",
                      fontSize: "16px",
                    }}
                    color="text.secondary"
                  >
                    <span style={{ float: "left" }}>
                      {t("hedef")}:90.00 {t("kg/s")}
                    </span>
                    <span>
                      <i style={{ float: "right" }}>
                        <DoneIcon
                          sx={{
                            color: colors.greenAccent[500],
                            marginBottom: "-5px",
                          }}
                        />
                        <i>100,00%</i>
                      </i>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            {" "}
            <Card sx={{ backgroundColor: colors.primary[400] }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{
                      display: "flex",
                      color: colors.greenAccent[500],
                      fontWeight: "bold",
                    }}
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    {t("aktifGramaj")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "40px", color: colors.grey[400] }}
                  >
                    187.00{" "}
                    <span
                      style={{
                        color: colors.greenAccent[500],
                        fontWeight: "bold",
                      }}
                    >
                      gr/m
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "block",
                      margin: "5px",
                      p: "10px",
                      fontSize: "16px",
                    }}
                    color="text.secondary"
                  >
                    <span style={{ float: "left" }}>
                      {t("hedef")}:90.00 {t("kg/s")}
                    </span>
                    <span>
                      <i style={{ float: "right" }}>
                        <DoneIcon
                          sx={{
                            color: colors.greenAccent[500],
                            marginBottom: "-5px",
                          }}
                        />
                        <i>100,00%</i>
                      </i>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            {" "}
            <Card sx={{ backgroundColor: colors.primary[400] }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{
                      display: "flex",
                      color: colors.greenAccent[500],
                      fontWeight: "bold",
                    }}
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    {t("aktifKalınlık")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "40px", color: colors.grey[400] }}
                  >
                    98.42{" "}
                    <span
                      style={{
                        color: colors.greenAccent[500],
                        fontWeight: "bold",
                      }}
                    >
                      μ
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "block",
                      margin: "5px",
                      p: "10px",
                      fontSize: "16px",
                    }}
                    color="text.secondary"
                  >
                    <span style={{ float: "left" }}>
                      {t("hedef")}:90.00 {t("kg/s")}
                    </span>
                    <span>
                      <i style={{ float: "right" }}>
                        <DoneIcon
                          sx={{
                            color: colors.greenAccent[500],
                            marginBottom: "-5px",
                          }}
                        />
                        <i>100,00%</i>
                      </i>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            {" "}
            <Card sx={{ backgroundColor: colors.primary[400] }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{
                      display: "flex",
                      color: colors.greenAccent[500],
                      fontWeight: "bold",
                    }}
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    {t("hatHızı")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "40px", color: colors.grey[400] }}
                  >
                    8.02{" "}
                    <span
                      style={{
                        color: colors.greenAccent[500],
                        fontWeight: "bold",
                      }}
                    >
                      m/dk
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "block",
                      margin: "5px",
                      p: "10px",
                      fontSize: "16px",
                    }}
                    color="text.secondary"
                  >
                    <span style={{ float: "left" }}>
                      {t("hedef")}:90.00 {t("kg/s")}
                    </span>
                    <span>
                      <i style={{ float: "right" }}>
                        <DoneIcon
                          sx={{
                            color: colors.greenAccent[500],
                            marginBottom: "-5px",
                          }}
                        />
                        <i>100,00%</i>
                      </i>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            {" "}
            <Card sx={{ backgroundColor: colors.primary[400] }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{
                      display: "flex",
                      color: colors.greenAccent[500],
                      fontWeight: "bold",
                    }}
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    {t("filmGenisligi")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "40px", color: colors.grey[400] }}
                  >
                    1000{" "}
                    <span
                      style={{
                        color: colors.greenAccent[500],
                        fontWeight: "bold",
                      }}
                    >
                      mm
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "block",
                      margin: "5px",
                      p: "10px",
                      fontSize: "16px",
                    }}
                    color="text.secondary"
                  >
                    <span style={{ float: "left" }}>
                      {t("hedef")}:90.00 {t("kg/s")}
                    </span>
                    <span>
                      <i style={{ float: "right" }}>
                        <DoneIcon
                          sx={{
                            color: colors.greenAccent[500],
                            marginBottom: "-5px",
                          }}
                        />
                        <i>100,00%</i>
                      </i>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            {" "}
            <Card sx={{ backgroundColor: colors.primary[400] }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    sx={{
                      display: "flex",
                      color: colors.greenAccent[500],
                      fontWeight: "bold",
                    }}
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    {t("calısmaSuesi")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "40px", color: colors.grey[400] }}
                  >
                    22{" "}
                    <span
                      style={{
                        color: colors.greenAccent[500],
                        fontWeight: "bold",
                      }}
                    >
                      {t("saat")}
                    </span>{" "}
                    15
                    <span
                      style={{
                        color: colors.greenAccent[500],
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {t("dk")}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "block",
                      margin: "5px",
                      p: "10px",
                      fontSize: "16px",
                    }}
                    color="text.secondary"
                  >
                    <span style={{ float: "left" }}>
                      {t("hedef")}:90.00 {t("kg/s")}
                    </span>
                    <span>
                      <i style={{ float: "right" }}>
                        <DoneIcon
                          sx={{
                            color: colors.greenAccent[500],
                            marginBottom: "-5px",
                          }}
                        />
                        <i>100,00%</i>
                      </i>
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <Card>
              <CardActionArea>
                <CardContent sx={{ backgroundColor: colors.primary[400] }}>
                  <Box>
                    <LineChart />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <Card>
              <CardActionArea>
                <CardContent sx={{ backgroundColor: colors.primary[400] }}>
                  <Box>
                    <PieChart />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid sx={{ marginLeft: "255px" }} xs={8}>
          <Item>
            <Card>
              <CardActionArea>
                <CardContent sx={{ backgroundColor: colors.primary[400] }}>
                  <Box>
                    <BarChart />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
        
          </Item>
          <div>
            
            </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DetaylıGorunum;
