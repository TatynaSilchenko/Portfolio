import React from 'react';
import styles from './Skill.module.css';

function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.skillIcon}>
                <img src={props.icon} alt=""/>
            </div>
            <span className={styles.skillTitlel}>
                {props.title}
            </span>
            <span className={styles.descriptionSkill}>
                {props.description}
            </span>
        </div>
    );
}

export default Skill;
