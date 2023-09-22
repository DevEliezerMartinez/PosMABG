import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Sale from "./Sale";
import Profile from "./Profile";
import Inventary from "./Inventary";
import Login from "./Login";

import { useDispatch, useSelector } from "react-redux";
import { updateData, deleteData } from "../features/Auth/AuthSlice";
import { Button } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const elemento = useSelector((state) => state.userData.infoUser);

  const handle = () => {
    dispatch(updateData({ name: "eliezer" }));
  };
  const destroy = () => {
    dispatch(updateData({ name: "" }));
  };

  return (
    <div>
      <Routes>
        <Route index element={<Sale />} />

        <Route element={<ProtectedRoute user={elemento} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/inventary" element={<Inventary />} />
        </Route>
        <Route path="/login" element={<Login/>}></Route>


      </Routes>

      <Button variant="contained" onClick={handle}>
        Iniciar sesion
      </Button>

      <Button variant="outlined"  onClick={destroy}>Cerrar sesion</Button>
    </div>
  );
}

export default Home;
