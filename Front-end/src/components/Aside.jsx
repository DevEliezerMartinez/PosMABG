import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { updateData, deleteData } from "../features/Auth/AuthSlice";
import { NavLink } from "react-router-dom";

import React from "react";
import Activetab from "./Activetab";
import SimpleTab from "./simpleTab";

function Aside({ Tabs }) {
  const dispatch = useDispatch();
  const elemento = useSelector((state) => state.userData.infoUser);
  const imagenBase64 = elemento.pictureUrl;
  const imagenSrc = `data:image/png;base64, ${imagenBase64}`;

  let user = elemento.name;
  let username = elemento.username;
  let actualTab = "Perfiles";
  const totalTabs = Tabs;
  const theme = useTheme();

  return (
    <>
      <Box
        theme={theme}
        sx={{
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#F79009",
          width: "20%",
          position: "absolute",
          left: "0px",
          color: "white",
        }}
      >
        <Typography sx={{ margin: 2 }} align="center" variant="h4">
          MAGB
        </Typography>

        <Typography
          align="center"
          variant="body1"
          sx={{ fontSize: "20px", marginY: 2 }}
        >
          Punto de venta
        </Typography>

        <Paper
          sx={{
            backgroundColor: "#F9AD49",
            my: 4,
            borderRadius: "6px",
            color: "white",
            maxWidth: "80%",
            margin: "auto",
          }}
        >
          <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: 60, height: 60 }} src={imagenSrc}></Avatar>
            <Box flexGrow="1">
              <Typography
                textAlign="center"
                variant="h3"
                sx={{ fontSize: "1.5rem", marginY: 1 }}
              >
                {user}
              </Typography>
              <Typography textAlign="center" variant="body1">
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

        <Container sx={{ margin: "auto", flexGrow: 1 }}>
          <Button
           component = { NavLink }
            sx={{
              width: "-webkit-fill-available",
              border: "1px dashed red",
              color: "white",
            }}
            color="error"
            variant="outlined"
            onClick={() => {
             
              to = "/login";
              dispatch(updateData(""));
            }}
          >
            Cerrar sesión
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default Aside;
