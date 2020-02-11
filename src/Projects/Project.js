import React from 'react';
import styles from './Project.module.css';


function Project(props) {
    return (
                <div className={styles.project}>
                    <div className={styles.progectIcon} style={props.style}>
                        <a className={styles.btnShow} href=''>Смотреть</a>
                    </div>
                    <span className={styles.projectTitle}>
                        {props.title}
                    </span>
                    <div className={styles.progectDescription}>
                        {props.description}
                    </div>
                    </div>
    );
}

export default Project;

