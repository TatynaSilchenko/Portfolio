import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import reactIcon from './../assets/img/react.png'
import jsIcon from './../assets/img/js.png'
import htmlIcon from './../assets/img/html.png'
import cssIcon from './../assets/img/css3.svg'
import Fade from 'react-reveal/Fade'

function Skills() {
    /*    let react=reactIcon;
        let js=jsIcon;
        let html=htmlIcon;
        let css=cssIcon;*/
    return (
        <div id={"skills"}className={styles.skills}>
            <Fade clear>
                <div className={styles.container}>
                    <HeaderTitle title={'Мои скиллы'}/>
                    <div className={styles.skillsWrapper}>
                        <Skill title={'HTML'}
                               icon={htmlIcon}
                               description={'Верстка wdefgsdhftjyukaefghtw ejkrtl '}/>
                        <Skill title={'CSS'}
                               icon={cssIcon}
                               description={'Flex,grid, медиа-запросы'}/>
                        <Skill title={'React'}
                               icon={reactIcon}
                               description={'Функциональные компоненты, классовые компоненты, маршрутизация, Redux, Redux-Form'}/>
                        <Skill title={'JS'}
                               icon={jsIcon}
                               description={'подробное описание JS'}/>
                    </div>

                </div>
            </Fade>

        </div>
    );
}

export default Skills;
