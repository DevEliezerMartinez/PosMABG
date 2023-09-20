import React from "react";
import Login from "./pages/Login";
import Aside from "./components/Aside";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Inventary from "./pages/Inventary";
import Cash_cut from "./pages/Cash_cut";
import Sale from "./pages/Sale";

function App() {
  const Tabs = [
    { name: "Ventas", image: "/src/assets/images/dollar.svg" , path: "/"},
    { name: "Perfiles", image: "/src/assets/images/User.svg" , path: "/profile"},
    { name: "Inventarios", image: "src/assets/images/Rack.svg", path: "/inventary" },
    { name: "Cortes de caja", image: "src/assets/images/bank.svg", path: "/cash_cut" },
  ];
  return (
    <>
       <Aside Tabs={Tabs}></Aside>
      <Routes>
        <Route path="/" element={<Sale />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inventary" element={<Inventary />} />
        <Route path="/cash_cut" element={<Cash_cut />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
