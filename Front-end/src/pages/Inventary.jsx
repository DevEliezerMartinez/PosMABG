import { Box } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddItem from '../components/inventory/Additem'
import Inventory from '../components/inventory/Inventory'
function Inventary() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F2F5F9",
        position: "absolute",
        left: "20%",
        width: "80%",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Consultar inventario" value="2" />
            <Tab label="Añadir productos" value="1" />
          
          </TabList>
        </Box>
        <TabPanel value="2"> <Inventory/></TabPanel>
        <TabPanel value="1"><AddItem/></TabPanel>
      
      </TabContext>
    </Box>
  );
}

export default Inventary;
