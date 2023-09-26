import { Box, Button, Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Non_Authenticated() {
  return (
    <Box
      sx={{
        backgroundColor: "#fafa",
        position: "absolute",
        left: "20%",
        width: "80%",
      }}
    >
      <Container>
        <h1>No tienes acceso a esta seccion</h1>
        <p>
          Si creees que esto es un erroe intenta cerrar sesion e ingresar de
          nuevo
        </p>
        <Button component={NavLink} to={"/Login"} variant="contained">
          Continuar
        </Button>
      </Container>
    </Box>
  );
}

export default Non_Authenticated;
