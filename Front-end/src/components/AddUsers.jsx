import React from "react";
import InputLabel from "@mui/material/InputLabel";
import { useForm } from "react-hook-form";

import { Grid, Button, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../features/Info/listUsers";

function AdminScreen() {

  const dispatch = useDispatch(); // Obtiene la función `dispatch` de Redux

 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [rol, setRol] = useState("");
  const [message, setMessage] = useState(""); // Estado para almacenar el mensaje de error

  const notistack = (message) => {
    setMessage(message); // Actualizar el mensaje de error
  };
 
  const handleChange = (event) => {
    setRol(event.target.value);
  };

  const onSubmit = (data) => {
    dispatch(update(1));
    let url = "http://localhost:5000/addUsers";
    data.rol = rol; // Asignar el valor actual de "rol" al campo "rol" en "data"

    console.log("datos a enviar: ",data)

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

        console.log("---",response)
        

        
      });
   
  };

  return (
    <>
      <Typography sx={{ my: 3 }} variant="h4">
        Control de usuarios
      </Typography>

      <Paper elevation={3} sx={{ mt: 4, maxWidth: "90%", margin: "auto" }}>
        <Grid container spacing={1} sx={{ p: 3 }} component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid  item xs={6} sx={{ maxHeight: "10px" }}>
            <InputLabel id="name">Nombre</InputLabel>

            <TextField
              fullWidth
              size="small"
              {...register("usuario", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
               
              })}
              error={!!errors.usuario}
              helperText={errors.usuario?.message || ""}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <InputLabel id="username">Usuario</InputLabel>
            <TextField
              size="small"
              fullWidth
              id="username"
              variant="outlined"
              {...register("username", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.-]+$/,
                  message: "Caracteres no válidos",
                },
              })}
              error={!!errors.usuario}
              helperText={errors.usuario?.message || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel  id="password">Contraseña</InputLabel>
            <TextField
              autoComplete="false"
              size="small"
              fullWidth
              id="password"
              variant="outlined"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.-]+$/,
                  message: "Caracteres no válidos",
                },
              })}
              error={!!errors.usuario}
              helperText={errors.usuario?.message || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel id="select-label">Rol</InputLabel>

            <Select
              size="small"
              fullWidth
              labelId="select-label"
              id="demo-select-small"
              value={rol}
              label="rol"
              onChange={handleChange}
              required
            >
              <MenuItem value={1}>Admin</MenuItem>
              <MenuItem value={3}>Usuario común</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" type="submit">Guardar</Button>
          </Grid>
        </Grid>
      </Paper>

      
    </>
  );
}

export default AdminScreen;
