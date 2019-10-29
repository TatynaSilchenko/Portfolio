import React from 'react';
import styles from './Slogan.module.css';
import HeaderTitle from "../HeaderTitle/HeaderTitle";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
            <HeaderTitle title={'Рассматриваю варианты удаленной работы'}/>
            <a className={styles.btnSubmit} href={'#k;j;'}> Нанаять меня</a>
        </div>
        </div>
    );
}

export default Slogan;
