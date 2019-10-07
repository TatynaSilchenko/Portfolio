import React from 'react';
import styles from './MainInfo.module.css';

function MainInfo() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я Татьяна <span>Сильченко</span>
                    </span>
                    <h1>I'm a Front-End Web Developer</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}><img src="" alt="my photo"/></div>

                </div>
            </div>
        </div>
    );
}

export default MainInfo;
