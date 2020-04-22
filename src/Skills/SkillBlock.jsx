import React from 'react';
import styles from './SkillBlock.module.css'

const SkillBlock = () => (
    <div className={styles.skillBlock}>
        <div className={styles.skillTitle}>
                <img className={styles.icon} src="" alt=""/>
                <span className={styles.title}>React</span>
        </div>
        <div className={styles.description}>
            <span>Подробное описание навыков, талантов и лесть о себе любимом</span>
        </div>
    </div>
);

export default SkillBlock;
