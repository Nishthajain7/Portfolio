import React from "react";
import Style from "./Projects.module.scss";
import { info } from "../../info/Info";
import { Box } from "@mui/material";

export default function Projects({ innerRef }) {
    return (
        <Box
            ref={innerRef}
            id="projects"
            mt={"3rem"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            <div className={Style.grid}>
                {info.projects.map((project, index) => (
                    <div key={index} className={Style.card}>
                        <div className={Style.header}>
                            <span className={Style.prompt}>$</span> {project.name}
                        </div>

                        <div className={Style.body}>
                            <p>{project.description}</p>

                            <ul className={Style.stack}>
                                {project.stack.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>

                            <div className={project.code ? Style.links : Style.noLinks}>
                                <a href={project.code} target="_blank" rel="noopener noreferrer">
                                    {project.code ? "Code→" : "(Code cannot be shared due to CIR confidentiality)"}
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    {project.live ? "Live→" : ""}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Box>
    );
}