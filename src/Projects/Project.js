import React from 'react';
import styles from './Project.module.css';


function Project() {
    return (
                <div className={styles.project}>
                    <div className={styles.progectIcon}>
                        <a className={styles.btnShow} href=''>Смотреть</a>
                    </div>
                    <span className={styles.projectTitle}>
                        Название проекта
                    </span>
                    <div className={styles.progectDescription}>
                        Краткое описание проекта
                    </div>
                    </div>
    );
}

export default Project;

