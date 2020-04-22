import React from 'react';
import styles from './Projects.module.css'
import ProjectBlock from "./ProjectBlock";

const Projects = () => (
    <div className={styles.projects}>
        <div className={styles.container}>
            <span className={styles.title}>My Projects</span>
            <div className={styles.projectBlocks}>
                <ProjectBlock/>
                <ProjectBlock/>
            </div>
        </div>
    </div>
);

export default Projects;
