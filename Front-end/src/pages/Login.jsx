import React from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../assets/styles/App.css";
import { CardContent, Grid, TextField } from "@mui/material";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { updateData, deleteData } from "../features/Auth/AuthSlice";
import {  useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  
  const dispatch = useDispatch();
  const elemento = useSelector((state) => state.userData.infoUser);

  const notistack = (message) => {
    enqueueSnackbar(message, {
      variant: "error",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  // Hook form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let url = "http://localhost:5000/login";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((error) => console.log("Errors:", error))
      .then((response) => {

        if (response[1] != 200) {
          notistack(response.mensaje);

        }
        
        console.log("---",response[0].user_data)
         let fullUserData = response[0].user_data;
        dispatch(updateData(fullUserData));
        navigate("/sale"); // Utiliza navigate en lugar de history.push

        
      });
  };

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
            <CardContent>
              <Typography variant="h4" component="h3">
                Inicio de sesión para
              </Typography>

              <Typography sx={{ fontWeight: 600 }} variant="h6" component="h3">
                Veterinaria MABG
              </Typography>

              <Container
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={flexContainerStyles}
              >
                <TextField
                  label="Usuario"
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
                      value: /^[a-zA-Z0-9_.-]+$/,
                      message: "Caracteres no validos",
                    },
                  })}
                  error={!!errors.usuario} // Marca el campo como erróneo si hay un error de validación
                  helperText={errors.usuario?.message || ""}
                />

                <TextField
                  sx={{ mt: 3 }}
                  type="password"
                  label="Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    minLength: {
                      value: 3,
                      message: "El campo debe contener al menos 3 caracteres.",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_.-]+$/,
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


