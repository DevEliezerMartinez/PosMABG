import UserPicture from "../assets/images/user.jpg";
import React from "react";

import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";

function UserCards({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Paper
        sx={{
          maxWidth: 300,
          p: 3,
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ width: 80, height: 80 }} src={UserPicture}></Avatar>
        <CardContent>
          <Typography>Usuario: {data.name}</Typography>
          <Typography>Rol: {data.role}</Typography>
        </CardContent>

        <div>
          <Button variant="contained" color="error" onClick={handleClickOpen}>
            Eliminar
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Eliminar usuario"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Esta accion es irrevocable, hagalo si esta completamente seguro.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button
                onClick={handleClose}
                variant="contained"
                color="error"
                autoFocus
              >
                Confirmar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Paper>
    </>
  );
}

export default UserCards;
