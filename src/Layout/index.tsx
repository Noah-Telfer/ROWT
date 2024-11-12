import { ReactNode } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import Sidebar from "../components/sidebar";
import ManOnMountain from "../assets/images/ManOnMountain.jpg";
import HeroBody from "../components/herobody/herobody";
import FooterHome from "../components/footer/footer_home";
import {ThemePrefrence} from "../types/generalTypes";

interface LayoutProps {
  children?: ReactNode;
  prefrence: ThemePrefrence;
}



const Layout = ({ children, prefrence }: LayoutProps,) => {
  let backgroundStyle: SxProps<Theme> = {};
  let bodyStyle: SxProps<Theme> = {};

  if(prefrence === "primary") {
    backgroundStyle = {
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
      //overflow: "hidden",
      //color: "#F0FAFC",
      position: "fixed",
    }

    bodyStyle = {
      width: "100%", 
      overflowY: "scroll", 
      //height: "72.5vh",
      flex: 1,
      marginTop: '15vh',
      marginBottom: '10vh',
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
    }

  }else if( prefrence=== "secondary"){
    backgroundStyle = {
      height: "100vh",
      flexDirection: "column",

      width: "100vw",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      zIndex: -1,
      overflow: "hidden",
      backgroundColor: "#F0FAFC",
      position: "fixed",
    }

    bodyStyle = {
      width: "100%", 
      overflowY: "scroll", 
      //height: "72.5vh",
      flex: 1,
      marginTop: '10vh',
      marginBottom: '10vh',
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center",
    }

  }

  return (
    <Box
      sx={backgroundStyle}
    >
      <Sidebar prefrence={prefrence}/> 
      <Box 
        sx={bodyStyle}
      >
        {children}
      </Box>
      <FooterHome prefrence={prefrence}/>
    </Box>
  );
};

export default Layout;
