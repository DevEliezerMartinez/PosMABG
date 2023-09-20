import {
  Avatar,
  Box,
  Button,
  Card,
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
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import UserPicture from "../assets/images/user.jpg";

import React from "react";

function Profile() {
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
          p:4,
        }}
      >
        <Typography variant="h1">Perfil</Typography>
        <Typography>Administre toda la informacion de su cuenta</Typography>

        <Card sx={{display: "flex", maxWidth: "50%", margin: "auto"}}>
        <CardMedia
            component="img"
            sx={{ width: 151, height: 151 }}
            image={UserPicture}
            alt="Live from space album cover"
          ></CardMedia>
          <CardContent>
            <Typography>E</Typography>
          </CardContent>
        </Card>

        <Divider></Divider>

        <Typography>Control de usuarios</Typography>
        <Paper>
         
          <Box component="form">
            <TextField id="name" label="name" variant="outlined" />
            <TextField id="username" label="username" variant="outlined" />
            <TextField id="password" label="password" variant="outlined" />
            <InputLabel id="select-label">Rol</InputLabel>
            <Select
              labelId="select-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>Admin</MenuItem>
              <MenuItem value={2}>Usuario comun</MenuItem>
            </Select>

            <Button variant="contained"> Guardar</Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Profile;
