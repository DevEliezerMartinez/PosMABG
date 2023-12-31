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
import AddUsers from "../components/AddUsers";
import UserCards from "../components/UserCards";

function Profile() {
  const dataUser = useSelector((state) => state.userData.infoUser);

  const imagenBase64 = dataUser.pictureUrl;
  const imagenSrc = `data:image/png;base64, ${imagenBase64}`;



  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F5F9",
          position: "absolute",
          left: "20%",
          width: "80%",
          p: 2,
          height: "99vh",
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
            mt: "1rem",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 151, height: 151 }}
            image={imagenSrc}
            alt="Imagen de usuario no disponible"
          />
          
          <CardContent
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              textAlign="center"
              variant="h3"
              sx={{ fontSize: "2rem" }}
            >
              {dataUser.name}
            </Typography>
            <Typography textAlign="center" variant="h6">
              @{dataUser.username}
            </Typography>

            <Typography textAlign="center" color="primary" variant="h3">
              Rol: {dataUser.role}
            </Typography>
          </CardContent>
        </Card>

        {dataUser && dataUser.role == "Administrador" ? <AddUsers /> : ""}
        {dataUser && dataUser.role == "Administrador" ? <UserCards /> : ""}
      </Box>
    </>
  );
}

export default Profile;
