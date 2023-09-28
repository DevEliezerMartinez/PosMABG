import React from "react";
import InputLabel from "@mui/material/InputLabel";

import {
  Avatar,
  Box,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";


import { useState } from "react";
import UserCards from "./UserCards";
import { useEffect } from "react";

function AdminScreen({ listUsers }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Typography sx={{ my: 3 }} variant="h4">
        Control de usuarios
      </Typography>

      <Paper elevation={3} sx={{ mt: 4, maxWidth: "90%", margin: "auto" }}>
        <Grid container spacing={1} sx={{ p: 3 }} component="form">
          <Grid item xs={6} sx={{ maxHeight: "10px" }}>
            <InputLabel id="name">Nombre</InputLabel>

            <TextField fullWidth size="small"></TextField>
          </Grid>
          <Grid item xs={6}>
            <InputLabel id="username">Usuario</InputLabel>
            <TextField
              size="small"
              fullWidth
              id="username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel id="password">Contraseña</InputLabel>
            <TextField
              size="small"
              fullWidth
              id="password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel id="select-label">Rol</InputLabel>

            <Select
              size="small"
              fullWidth
              labelId="select-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>Admin</MenuItem>
              <MenuItem value={2}>Usuario comun</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained"> Guardar</Button>
          </Grid>
        </Grid>
      </Paper>

    
    </>
  );
}

export default AdminScreen;
