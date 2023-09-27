import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Sale() {
  const elemento = useSelector((state) => state.userData.infoUser);

  const imagenBase64 = elemento.pictureUrl;
  const imagenSrc = `data:image/png;base64, ${imagenBase64}`;

  return (
    <Box
      sx={{
        backgroundColor: "#F2F5F9",
        position: "absolute",
        left: "20%",
        width: "80%",
      }}
    >
     
     
      Saleeeeeeeeeeeeeeeee
    </Box>
  );
}

export default Sale;
