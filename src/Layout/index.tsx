import { ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/sidebar";
import ManOnMountain from "../assets/images/ManOnMountain.jpg";
import HeroBody from "../components/herobody/herobody";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        //display: "flex",
        // padding: 3,
        // gap: 3,
        height: "100vh",
        flexDirection: "column",
        // top: 0,
        // left: 0,
        width: "100vw",
        backgroundImage: `url(${ManOnMountain})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
        //backgroundColor: "#F0FAFC",
        overflow: "hidden",
        //color: "#F0FAFC",
        position: "fixed",
        // "flex-direction": {
        //   xs: "row",
        //   lg: "row",
        // },
      }}
    >
      <Sidebar />
      <Box sx={{ 
            width: "100%", 
            overflowY: "scroll", 
            height: "100vw",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

        }}
      ><HeroBody/>
      </Box>
    </Box>
  );
};

export default Layout;
