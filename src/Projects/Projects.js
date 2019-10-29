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
                    <Project title={'TodoList'} description={'something description jbkfbljdbvldvb'}/>
                    <Project title={'Social Network'} description={'something description jbkfbljdbvldvbigigiugiugigib giguiug uhuh uh'}/>
                    <Project title={'Selebration bar'} description={'something description jbkfbljdbvldvb'}/>

                </div>

            </div>

        </div>
    );
}

export default Projects;

