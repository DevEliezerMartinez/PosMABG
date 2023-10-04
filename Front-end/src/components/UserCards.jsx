import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../features/Info/listUsers";

import {
  Avatar,
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

function UserCards() {
  const dispatch = useDispatch(); // Obtiene la función `dispatch` de Redux
  const counterValue = useSelector((state) => state.listUsers.counter); // Obtiene el valor del contador del estado


  const [listUsers, setListUsers] = useState([
    { username: "", role: "", picture: "" },
  ]);
  const [dialogOpen, setDialogOpen] = useState(
    Array(listUsers.length).fill(false)
  );

  let url = "http://localhost:5000/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log("Errors:", error))
      .then((response) => {
        setListUsers(response.data);
      });
  }, [counterValue]);

  const handleDialogOpen = (index) => {
    const updatedDialogOpen = [...dialogOpen];
    updatedDialogOpen[index] = true;
    setDialogOpen(updatedDialogOpen);
  };

  const handleDialogClose = (index) => {
    const updatedDialogOpen = [...dialogOpen];
    updatedDialogOpen[index] = false;
    setDialogOpen(updatedDialogOpen);
  };

  const delateUser = (user) => {
    let url = "http://localhost:5000/deleteUser";
    let infoUser = { username: user };
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoUser),
    })
      .then((res) => res.json())
      .catch((error) => console.log("Errors:", error))
      .then((response) => {});
  };

  return (
    <div>
      <>
      
       

        <Typography sx={{ marginTop: 3, marginBottom: "0" }} variant="h4">
          Total de usuarios
        </Typography>

        <Grid container spacing={3}>
          {listUsers.map((user, index) => (
            <Grid item sx={{ justifyContent: "space-evenly" }} key={index}>
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
                  <Avatar
                    sx={{ width: 80, height: 80 }}
                    src={`data:image/jpeg;base64,${user.picture}`}
                  ></Avatar>
                  <CardContent>
                    <Typography>Usuario: {user.username}</Typography>
                    <Typography>Rol: {user.role}</Typography>
                  </CardContent>

                  <div>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDialogOpen(index)}
                    >
                      Eliminar
                    </Button>
                    <Dialog
                      open={dialogOpen[index]}
                      onClose={() => handleDialogClose(index)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Eliminar usuario"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Esta acción es irrevocable, hágalo si está
                          completamente seguro.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => handleDialogClose(index)}>
                          Cancelar
                        </Button>
                        <Button
                          id="delete"
                          onClick={() => {
                            handleDialogClose(index);
                            // Aquí puedes realizar la lógica de eliminación del usuario
                            console.log(`Eliminando usuario: ${user.username}`);
                            delateUser(user.username);
                            dispatch(update(1));
                          }}
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
