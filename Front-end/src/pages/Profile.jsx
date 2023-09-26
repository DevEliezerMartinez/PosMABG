import InputLabel from "@mui/material/InputLabel";
import UserPicture from "../assets/images/user.jpg";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

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

import { useSelector } from "react-redux";

import React from "react";
import UserCards from "../components/UserCards";

const listUsers = [
  {
    name: "eliezer",
    role: "admin",
  },
  {
    name: "mera",
    role: "user",
  },
];

function Profile() {
  const dataUser = useSelector((state) => state.userData.infoUser);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F5F9",
          position: "absolute",
          left: "20%",
          width: "80%",
          p: 3,
          maxHeight: "99vh"
        }}
      >
        <Typography variant="h4">Perfil</Typography>
        <Typography variant="h5">
          Administre toda la informacion de su cuenta
        </Typography>

        <Card
          sx={{
            display: "flex",
            maxWidth: "50%",
            margin: "auto",
            p: 2,
            justifyContent: "space-around",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151, height: 151 }}
            image={UserPicture}
            alt="Live from space album cover"
          ></CardMedia>
          <CardContent>
            <Typography>{dataUser.name}</Typography>
            <Typography>@{dataUser.username}</Typography>

            <Box>
              <Typography>Rol: {dataUser.role}</Typography>
              <Typography>Ultimo corte de caja: 19/12/2023</Typography>
            </Box>
          </CardContent>

          <CardActions>
            <Button size="small" variant="outlined">
              Edit
            </Button>
          </CardActions>
        </Card>

        <Divider sx={{ my: 3 }}></Divider>

        <Typography sx={{ my: 3 }} variant="h4">
          Control de usuarios
        </Typography>

        <Paper elevation={3} sx={{ mt: 4 }}>
          <Grid container spacing={1} sx={{ p: 3 }} component="form">
            <Grid item xs={6}>
              <InputLabel id="name" >Nombre</InputLabel>
              <TextField fullWidth id="name" label="" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="username">Usuario</InputLabel>
              <TextField fullWidth id="username" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="password">Contraseña</InputLabel>
              <TextField
                fullWidth
                id="password"
                variant="outlined"
                type="password"
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel id="select-label">Rol</InputLabel>

              <Select
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

        <Divider />

        <Grid container spacing={3}>
          {listUsers.map((item) => (
            <Grid item>
              <UserCards key={item.name} data={item}></UserCards>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Profile;
