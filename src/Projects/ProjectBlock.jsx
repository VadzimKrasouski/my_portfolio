import React from 'react';
import styles from './ProjectBlock.module.css'

const ProjectBlock = () => (
    <div className={styles.projectBlock}>
        <div className={styles.projectCover}>
            <div className={styles.cover}>
                <img src="" alt=""/>
            </div>
            <div className={styles.open}>
                <button>Смотреть</button>
            </div>
        </div>
        <div className={styles.description}>
            <div className={styles.title}>
                <h3>Название проекта</h3>
            </div>
            <span>Краткое описание</span>
        </div>
    </div>
);

export default ProjectBlock;
