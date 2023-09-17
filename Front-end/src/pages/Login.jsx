import React from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../assets/styles/App.css";
import { CardContent, Grid, TextField } from "@mui/material";

import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";

function Login() {
  // Hook form

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  const flexContainerStyles = {
    display: "flex",
    marginTop: "2rem",
    flexDirection: "column", // Cambia a "column" si deseas una disposición vertical
  };

  return (
    <>
      <Grid
        maxWidth="false"
        sx={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid
            className="bckgLogin"
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          />

          <Grid sx={{ mt: 20, padding: 3, ml: 10 }} item lg={4}>
            <CardContent container>
              <Typography
                className="FontMontserrat"
                variant="h4"
                component="h3"
              >
                Inicio de sesión para
              </Typography>

              <Typography
                sx={{ fontWeight: 600 }}
                className="FontMontserrat"
                variant="h6"
                component="h3"
              >
                Veterinaria MABG
              </Typography>

              <Container
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={flexContainerStyles}
              >
                <TextField
                  id="standard-basic"
                  label="usuario"
                  variant="standard"
                  {...register("usuario", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    minLength: {
                      value: 5,
                      message: "El campo debe contener al menos 3 caracteres.",
                    },
                    pattern: {
                      value:  /^[a-zA-Z0-9_.-]+$/,
                      message: "Caracteres no validos",
                    },
                  })}
                  error={!!errors.usuario} // Marca el campo como erróneo si hay un error de validación
                  helperText={errors.usuario?.message || ""}
                />

                <TextField
                  sx={{ mt: 3 }}
                  id="standard-basic"
                  type="password"
                  label="Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    minLength: {
                      value: 5,
                      message: "El campo debe contener al menos 3 caracteres.",
                    },
                    pattern: {
                      value:  /^[a-zA-Z0-9_.-]+$/,
                      message: "Caracteres no validos",
                    },
                  })}
                  error={!!errors.password} // Marca el campo como erróneo si hay un error de validación
                  helperText={errors.password?.message || ""}
                  variant="standard"
                />

                <Button
                  sx={{ mt: 8, mb: 2 }}
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  Entrar
                </Button>
              </Container>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
