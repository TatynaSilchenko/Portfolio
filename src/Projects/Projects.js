import React from 'react';
import styles from './Projects.module.css';
import Project from './Project';
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import socialNImg from'../assets/img/socialNetworkImg.png'
import selectionBarImg from '../assets/img/selectionBar.png'
import Fade from "react-reveal/Fade";
function Projects() {
    const socialNetworkImg={
        backgroundImage:`url(${socialNImg})`
    }
    const selectionBarStyle={
        backgroundImage: `url(${selectionBarImg})`
    }
    return (
        <div id={"projects"}className={styles.projects}>
            <Fade clear>
            <div className={styles.container}>
                <HeaderTitle title={'Проекты'}/>
                <div className={styles.projectsWrapper}>
                    <Project title={'TodoList'} description={'something description jbkfbljdbvldvb'}/>
                    <Project style={socialNetworkImg} title={'Social Network'} description={'something description jbkfbljdbvldvbigigiugiugigib giguiug uhuh uh'}/>
                    <Project style={selectionBarStyle} title={'Selebration bar'} description={'something description jbkfbljdbvldvb'}/>

                </div>

            </div>
            </Fade>
        </div>
    );
}

export default Projects;

