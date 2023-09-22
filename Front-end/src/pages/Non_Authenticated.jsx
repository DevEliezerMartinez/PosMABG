import { Button, Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Non_Authenticated() {
  return (
    <div>
      <Container>
        <h1>Debes iniciar sesión para continuar</h1>
        <Button component={NavLink} to={"/Login"} variant="contained">
          Continuar
        </Button>
      </Container>
    </div>
  );
}

export default Non_Authenticated;
