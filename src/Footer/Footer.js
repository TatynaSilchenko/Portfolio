import React from 'react';
import styles from './Footer.module.css';
import talegtamIMg from '../assets/img/telegramImg.png'
import LinkedInIkon from '../assets/img/LinkedInIkon.png'
import vkIkon from '../assets/img/vkIkon.svg'
import viberIkon from '../assets/img/viberIcon.png'
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Fade from "react-reveal/Fade";

function Footer() {
    return (
        <div className={styles.footer}>
            <Fade clear>
            <div className={styles.container}>
                <HeaderTitle title={'Сильченко Татьяна'}/>
                <div className={styles.socialBlock}>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={talegtamIMg} alt="image"/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={LinkedInIkon} alt="image"/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={vkIkon} alt="image"/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={viberIkon} alt="image"/>
                        </a>
                    </div>

                </div>
                <span className={styles.copyright}> ©2019 Все права защищены</span>
            </div>
            </Fade>
        </div>
    );
}

export default Footer;
