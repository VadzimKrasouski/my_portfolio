import React from 'react';
import styles from './ProjectBlock.module.css'

const ProjectBlock = () => (
    <div className={styles.projectBlock}>
        <div className={styles.projectCover}>
            <img className={styles.cover} src="" alt=""/>
            <button className={styles.coverBtn}>Смотреть</button>
        </div>
        <div className={styles.description}>
            <h3>Название проекта</h3>
            <h4>Краткое описание</h4>
        </div>
    </div>
);

export default ProjectBlock;
