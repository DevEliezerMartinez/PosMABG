import React from "react";
import mabg from "../assets/images/mabg.jpeg";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Grid,
  Button,
  CardContent,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const listUsers = [
  {
    name: "eliezer",
    role: "admin",
    pictureUrl: mabg
  },
  {
    name: "mera",
    role: "user",
  },
];

function UserCards() {
  const [open, setOpen] = React.useState(false);
  const dataUser = useSelector((state) => state.userData.infoUser);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <>
        <Typography sx={{ marginTop: 3, marginBottom: "0" }} variant="h4">
          Total de usuarios
        </Typography>

        <Grid container spacing={3}>
          {listUsers.map((item) => (
            <Grid item>
              <>
                <Paper
                  sx={{
                    maxWidth: 300,
                    p: 2,
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ width: 80, height: 80 }} src={item.pictureUrl}></Avatar>
                  <CardContent>
                    <Typography>Usuario: {item.name}</Typography>
                    <Typography>Rol: {item.role}</Typography>
                  </CardContent>

                  <div>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={handleClickOpen}
                    >
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
                          Esta accion es irrevocable, hagalo si esta
                          completamente seguro.
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
            </Grid>
          ))}
        </Grid>
      </>
    </div>
  );
}

export default UserCards;
