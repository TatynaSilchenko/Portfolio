import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <HeaderTitle title={'Проекты'}/>
                <div className={styles.projectsWrapper}>
                    <Project/>
                    <Project/>
                    {/*<Project/>*/}
                    {/*<Project/>*/}
                </div>

            </div>

        </div>
    );
}

export default Projects;

