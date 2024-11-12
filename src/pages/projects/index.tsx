import React from "react";
import { Box, Button, Card, CardMedia } from "@mui/material";
import Layout from "../../Layout";
import getProjects from "../../components/getprojectlist";


const Projects = () => {
    const projectList = getProjects();

    return (
        <Layout prefrence="secondary">
            <Box 
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <Box
                    sx={{
                        flexBasis: {
                            xs: undefined,
                            sd: undefined,
                            md: "45%"
                        },
                        flexDirection: "column",
                        display:{
                            xs: "none",
                            sd: "none",
                            md: "flex",
                        },
                        height:"100vh",
                        width: "100%",
                        padding: "16px",
                    }}
                >
                    {projectList.map((item) => (
                        <Box key={item._docId.toString()}>
                            <Card 
                                key={item._docId.toString()} 
                                sx={{ 
                                     
                                    width:"100%",
                                    maxHeight: "336px"
                                }}
                            > 
                                <CardMedia 
                                    component="img" 
                                    height="336px" 
                                    image="/images/seo.jpg"
                                    
                                    // Path to the image 
                                    //alt={item.title} 
                                    sx={{}} 
                                /> 
                            </Card>


                        </Box>
                    ))}
                </Box>
                <Box
                    sx={{
                        flexBasis: {
                            xs: undefined,
                            sd: undefined,
                            md: "55%"
                        },
                        display: "flex",
                        flexDirection: "column",
                        height:"100vh",
                        width: "100%",
                        padding: "16px",
                    }}
                >
                    {projectList.map((item) => (
                        <Box key={item._docId.toString()}> 
                            {item.title}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Layout>
    );
};

export default Projects;
