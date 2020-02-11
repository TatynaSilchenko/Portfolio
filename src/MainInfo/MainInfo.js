import React from 'react';
import styles from './MainInfo.module.css';
import photo from'../assets/img/photo.jpg'

function MainInfo() {
    return (
        <div id={"main"}className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я Татьяна <span>Сильченко</span>
                    </span>
                    <h1>Я Front-End разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>
                        <img src={photo} alt="my photo"/></div>

                </div>
            </div>
        </div>
    );
}

export default MainInfo;
