import React from 'react';
import styles from './Slogan.module.css';
import HeaderTitle from "../HeaderTitle/HeaderTitle";

function Slogan() {
    return (
        <div className={styles.slogan}>
            Рассматриваю варианты удаленной работы
<button className={styles.btnSubmit} type='submit'> Нанаять меня</button>
        </div>
    );
}

export default Slogan;
