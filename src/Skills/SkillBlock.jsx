import React from 'react';
import styles from './SkillBlock.module.css'

const SkillBlock = () => (
    <div className={styles.skillBlock}>
        <div className={styles.skillTitle}>
            <div className={styles.icon}>
                <img src="" alt=""/>
            </div>
            <div className={styles.title}>
                <h3>React</h3>
            </div>
        </div>
        <div className={styles.description}>
            <span>Подробное описание навыков, талантов и лесть о себе любимом</span>
        </div>
    </div>
);

export default SkillBlock;
