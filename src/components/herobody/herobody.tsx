import { Box, Button, Typography } from "@mui/material";
import React from "react"



const HeroBody = () => {
 return (
    <Box
        sx={{
            position: "absolute",
            top: "25%",
            left: "5%",
            display: "flex",
            flexDirection: "column",
            padding: 2,
            borderRadius: 2,
            width: "auto", 
        }}
    >
        <Typography variant= "h2" component="h1">
            Telfer Enterprises
        </Typography>
        <Box
            sx={{
                display:"flex",
                flexDirection: "row"
            }}
        >
            <Typography  component="p">
                Striving to Learn and Improve Everyday.
            </Typography>
            <Button variant="contained"> See How</Button>
        </Box>
    </Box>
 );
};
export default HeroBody;