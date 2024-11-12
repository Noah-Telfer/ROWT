import React from "react"
import ProjectListJson from "../../assets/articles/firstWebsite.json"
import { ProjectListJsonProps } from "../../types/generalTypes";

const getProjects = () => {
    const projectList:ProjectListJsonProps = ProjectListJson;
    return ( projectList);
};
export default getProjects;