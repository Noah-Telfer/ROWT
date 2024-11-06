import { Box, Typography } from "@mui/material";
import Logo from "../../assets/images/TELogoNoBackground.png";
import React from "react";

const FooterHome = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                position: "fixed",
                bottom:0,
                left: 0,
                justifyContent: "center",
                width: "100%",
                height: "12.5vh",
                backgroundColor: "#F0FAFC",
            }}
        >
            <Box sx={{ 
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "flex",
                        },
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center", 
                        flex: 1, 
                    }} 
            > 
                <Typography variant="h4"> Telfer Enterprises </Typography> 
            </Box>


            {/* Box 2: Center */}
            <Box sx={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                textJustify: "center"
            }}
            >
                <img
                    src={Logo}
                    alt="Placeholder"
                    style={{
                        width: '20%',
                        height: '80%',
                    }}
                />
            </Box>

            {/* Box 3: Right */}
            <Box sx={{ 
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "flex",
                        },
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center", 
                        flex: 1, 
                    }} 
            > 
                <Typography variant="h4"> Icons Go Here </Typography> 
            </Box>


        </Box>
    );
};
export default FooterHome;
