import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/Projects",
  },
  {
    name: "Background",
    link: "/Background",
  },
  {
    name: "Reachout",
    link: "/Reachout",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "#F0FAFC",
        padding: 2,
        borderRadius: 2,
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "row",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: 1,
          lg: 1,
        },
        height: "10vh",
      }}
    ></Box>
  );
};
export default Sidebar;
