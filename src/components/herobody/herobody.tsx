import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { isTemplateExpression } from "typescript";


const projectLink = {
    name: "See How",
    link: "/Projects"
}

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
        backdropFilter: "blur(5%)",
        width: "auto",
      }}
    >
      <Typography
        variant="h1" // Adjust the variant as needed
        sx={{
          color: "#F0FAFC",
          fontSize: "3.5rem", // Customize size
          fontWeight: "bold", // Customize weight if desired
          textAlign: "center", // Center alignment, optional // Other styles as needed
          textShadow:
            "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
        }}
      >
        Telfer Enterprises
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sd: "column",
            md:"row",
          },
          alignItems: {
            xs: "center",
            sd: "center",
            md: undefined,
          },
          justifyContent: {
            xs: "center",
            sd: "center",
            md: undefined,
          }
        }}
      >
        <Typography
          
          component="h1"
          variant="h2"
          sx={{
            flexBasis: {
              xs:undefined,
              sd: undefined,
              md: "65%",
            },
            textAlign:{
                xs: "center",
                sd: "center",
                md: "left",
              },
            color: "#000000",
            fontWeight: 200,
            fontSize: "1.8rem"
          }}
        >
          Striving to Learn and<br/>Improve Everyday.
        </Typography>
        <Box 
          sx={{
            flexBasis: {
              xs:undefined,
              sd: undefined,
              md: "35%",
            },
            justifyContent: "center",
          }}
        >
          <Link
              key={projectLink.name}
              to={projectLink.link}
              style={{textDecoration:"none"}}
          >
              <Button
                  variant="contained"
                  sx= {{

                      maxWidth: "140px",
                      maxHeight: "60px",
                      minHeight: "60px",
                      backgroundColor: "#E89465",
                      borderRadius: "22px",
                      color: "#F0FAFC", 
                      fontWeight: 700, 
                      padding: "8px 16px", 
                      fontSize: "1rem"
                  }}
              > 
                  {projectLink.name}
              </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default HeroBody;
