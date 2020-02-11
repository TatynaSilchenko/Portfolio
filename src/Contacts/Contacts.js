import React from 'react';
import styles from './Contacts.module.css';
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Fade from "react-reveal/Fade";

function Contacts() {
    return (
        <div id={"contacts"}className={styles.contacts}>
            <Fade clear>
            <div className={styles.container}>
                <HeaderTitle title={'Контакты'}/>
                <form className={styles.formWrapper}>
                    <input className={styles.formArea} placeholder='Имя' type='text'/>
                    <input className={styles.formArea} placeholder='e-mail' type='text'/>
                    <textarea className={styles.messageArea} placeholder='Сообщение'/>
                    <button className={styles.btnSubmit} type='submit'>Отправить</button>
                </form>

            </div>
                </Fade>
        </div>
    );
}

export default Contacts;
