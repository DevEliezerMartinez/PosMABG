import React from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { CardMedia, Grid } from "@mui/material";

function Login() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={6} sx={{ border: 1 }}>
          {" "}
          <CardMedia
            component="img"
            image="./vector.png"
            height="200"
            alt="Card Image"
          ></CardMedia>
        </Grid>
        <Grid item xs={6} sx={{ border: 1 }}>
          <Typography variant="h1" component="h3">
            {" "}
            form
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
