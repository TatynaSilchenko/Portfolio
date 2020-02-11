import React from 'react';
import styles from './Slogan.module.css';
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Fade from "react-reveal/Fade";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <Fade clear>
            <div className={styles.container}>
            <HeaderTitle title={'Рассматриваю варианты удаленной работы'}/>
            <a className={styles.btnSubmit} href={'#k;j;'}> Нанаять меня</a>
        </div>
            </Fade>
        </div>
    );
}

export default Slogan;
