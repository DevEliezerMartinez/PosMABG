import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import React from "react";
import Activetab from "./Activetab";
import SimpleTab from "./simpleTab";
import UserPicture from "../assets/images/user.jpg";

function Aside({ Tabs }) {
  console.log(Tabs);
  let user = "Eliezer Martinez";
  let username = "eliezer.code";
  let actualTab = "Perfiles";
  const totalTabs = Tabs;
  const theme = useTheme();

  return (
    <>
      <Container
        theme={theme}
        sx={{
          minHeight: "100vh",
          backgroundColor: "#F79009",
          width: "20%",
          position: "absolute",
          left: "0px",
        }}
      >
        <Typography sx={{ margin: 2 }} align="center" variant="h3">
          MAGB
        </Typography>
        <Typography
          align="center"
          variant="h3"
          sx={{ fontSize: "20px", marginY: 2 }}
        >
          Punto de venta
        </Typography>

        <Paper sx={{ backgroundColor: "#F9AD49", my: 4, borderRadius: "6px" }}>
          <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 80, height: 80 }} src={UserPicture}></Avatar>
            <Box flexGrow="1">
              <Typography
                textAlign="center"
                variant="h3"
                sx={{ fontSize: "1.5rem", marginY: 1 }}
              >
                {user}
              </Typography>
              <Typography textAlign="center" variant="h5">
                @{username}
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Activetab tabname={actualTab}></Activetab>
        <Container sx={{ marginY: "6rem", display: "grid", gap: "3rem" }}>
          {totalTabs.map((item) => (
            <SimpleTab
              key={item.name}
              tabname={item.name}
              Icon={item.image}
              path={item.path}
            ></SimpleTab>
          ))}
        </Container>
      </Container>
    </>
  );
}

export default Aside;
