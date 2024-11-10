import { Box, Button, SxProps, Theme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/TELogoNoBackground.png"
import React from "react";
import ThemePrefrence from "../../types/generalTypes";
import primaryButtonStyle from "../../styles/button/inxex";

type SidebarProps = {
    prefrence: ThemePrefrence
}

const homeLink = {
    name: "Home",
    link: "/"
}

const navLinks = [
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

const Sidebar = ({prefrence}: SidebarProps ) => {
  const { pathname } = useLocation();
  let headerStyle: SxProps<Theme> = {};

  switch(prefrence) {
    case "primary":
        headerStyle = {
            backgroundColor: "transparent",
            padding: 0,
            borderRadius: 0,
            position: "fixed",
            left: 0,
            top: 0,
            display: "flex",
            zIndex: 2,
            // flexDirection: {
            //   xs: "column",
            //   lg: "column",
            // },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "15vh",
        }
        break;
    
    case "secondary":
        headerStyle= {
            backgroundColor: "#293A4D",
            padding: 0,
            borderRadius: 0,
            position: "fixed",
            right: 0,
            top: 0,
            display: "flex",
            zIndex: 2,
            // flexDirection: {
            //   xs: "column",
            //   lg: "column",
            // },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "10vh",
        }
        break;
    default: 
        break;
  }


  return (
    <Box
      sx={headerStyle}
    >
        <Box
            sx= {{
                position: "absolute",
                top: 0,
                right: 0,
                width: {
                    md: "40%",
                    sd: "100",
                    xs: "100%",
                },
                height: "50%",
                backgroundColor: 'transparent',
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
            }}
        >
            {navLinks.map((item) => (
                <Link 
                    key={item.name}
                    to={item.link}
                    style={{textDecoration:"none"}}
                >
                    <Button variant="contained" sx={primaryButtonStyle}>{item.name}</Button>
                </Link>
            ))}
        </Box>
        
        <Box sx={{
                display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                },
                alignItems: "center",
                justifyContent: "center",    
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "10%",
            }}
        >
            <Link
                key={homeLink.name}
                to={homeLink.link}
                style={{textDecoration:"none"}}
            >
                <img
                    src={Logo}
                    alt="Placeholder"
                    style={{
                        width: '100%',
                        height: '100%',
                        opacity: 1.0
                    }}
                    
                />
            </Link>  
            
        </Box>

    </Box>
  );
};
export default Sidebar;
