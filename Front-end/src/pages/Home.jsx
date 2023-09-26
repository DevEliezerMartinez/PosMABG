import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Aside from "../components/Aside";
import Sale from "./Sale";
import Profile from "./Profile";
import Inventary from "./Inventary";
import Login from "./Login";
import { updateData, deleteData } from "../features/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import Cash_cut from "./Cash_cut";
import { Button } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const elemento = useSelector((state) => state.userData.infoUser);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario está autenticado
    if (elemento && elemento.name) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [elemento, navigate]);

  const destroy = () => {
    // Realizar acciones de cierre de sesión
    dispatch(updateData({}));
    setIsLoggedIn(false);
    navigate("/login");
  };

  const Tabs = [
    { name: "Ventas", image: "/src/assets/images/dollar.svg", path: "/sale" },
    {
      name: "Perfiles",
      image: "/src/assets/images/User.svg",
      path: "/profile",
    },
    {
      name: "Inventarios",
      image: "src/assets/images/Rack.svg",
      path: "/inventary",
    },
    {
      name: "Cortes de caja",
      image: "src/assets/images/bank.svg",
      path: "/cash_cut",
    },
  ];

  return (
    <div>
      {isLoggedIn && <Aside Tabs={Tabs}></Aside>} {/* Mostrar Aside solo si está autenticado */}
      <Routes>
        <Route path="/login" index element={<Login />} />

        <Route element={<ProtectedRoute isAllowed={elemento} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/inventary" element={<Inventary />} />
          <Route path="/sale" element={<Sale />} />
        </Route>

        <Route
          path="/cash_cut"
          element={
            <ProtectedRoute
              isAllowed={elemento && elemento.role == 1}
              redirectTo="/cash_cut"
            >
              <Cash_cut />
            </ProtectedRoute>
          }
        />
      </Routes>

      {isLoggedIn && (
        <Button variant="outlined" onClick={destroy}>
          Cerrar sesión
        </Button>
      )}
    </div>
  );
}

export default Home;


