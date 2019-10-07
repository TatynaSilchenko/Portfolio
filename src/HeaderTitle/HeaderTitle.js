import React from 'react';
import styles from'./HeaderTitle.module.css'

function HeaderTitle(props) {
    return (
        <div className={styles.headerBlock}>
            <h2 className={styles.headerTitle}>{props.title}</h2>
            <div className={styles.line}>
            </div>
        </div>
    )

}
export default HeaderTitle;