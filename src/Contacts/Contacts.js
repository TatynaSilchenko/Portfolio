import React from 'react';
import styles from './Contacts.module.css';
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Fade from "react-reveal/Fade";
import axios from "axios";

function Contacts() {
    const inputParsers = {
        date(input) {
            const [month, day, year] = input.split('/');
            return `${year}-${month}-${day}`;
        },
        uppercase(input) {
            return input.toUpperCase();
        },
        number(input) {
            return parseFloat(input);
        },
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        let form=document.querySelector("#contact-form")
        axios.post("https://smtp-email-nodejs-server.herokuapp.com/sendMessage",{
            name:form.querySelector("#name").value,
            contact:form.querySelector("#email").value,
            message:form.querySelector("#text").value,
        })
            .then(()=>{
                alert('done')
            })
        }
        return (
            <div id={"contacts"} className={styles.contacts}>
                <Fade clear>
                    <div className={styles.container}>
                        <HeaderTitle title={'Контакты'}/>
                        <form className={styles.formWrapper} onSubmit={handleSubmit.bind(onsubmit)} id="contact-form">
                            <input className={styles.formArea} placeholder='Имя' type='text' id="name"/>
                            <input className={styles.formArea} placeholder='e-mail' type='text' id="email"/>
                            <textarea className={styles.messageArea} placeholder='Сообщение' id="text"/>
                            <button className={styles.btnSubmit} type="submit" value="Submit">Отправить</button>
                        </form>

                    </div>
                </Fade>
            </div>
        );
    }

    export default Contacts;
