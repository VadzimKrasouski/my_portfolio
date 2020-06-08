import React from 'react';
import styles from './ProjectBlock.module.scss'
import imgDefault from '../assets/images/default.jpg';

const ProjectBlock = (props) => {
    let imageProject = undefined ? imgDefault : props.urlimg;
    return (
        <div className={styles.projectBlock}>
            <div className={styles.projectCover}
                 style={{backgroundImage: `url(${imageProject})`}}>
                <div className={styles.overlay}><a href={props.link}/></div>
                <div className={styles.description}>
                    <h3>{props.title}</h3>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    )
};

export default ProjectBlock;
