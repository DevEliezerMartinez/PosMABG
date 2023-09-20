import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function simpleTab({ tabname, Icon, path }) {
 
  return (
    <>
      <Box
      component={NavLink}
      to={path}
      
        sx={{
          width: "100%",
          margin: "auto",
          p: 1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: "6px",
          transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          backgroundColor :"rgba(251, 209, 155, 0.27)"
          
        },
        }}
      >
        <img src={Icon} alt="Descripción" />
        <Typography
          textAlign="center"
          variant="p"
          flexGrow={1}
          sx={{ fontWeight: 300 }}
        >
          {tabname}
        </Typography>
      </Box>
    </>
  );
}

export default simpleTab;
