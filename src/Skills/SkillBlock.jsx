import React from 'react';
import styles from './SkillBlock.module.css'

const SkillBlock = () => (
    <div className={styles.skillBlock}>
        <div className={styles.skillTitle}>
                <img className={styles.icon} src="" alt=""/>
                <h2 className={styles.title}>React</h2>
        </div>
        <div className={styles.description}>
            <h4>Подробное описание навыков, талантов и лесть о себе любимом</h4>
        </div>
    </div>
);

export default SkillBlock;
