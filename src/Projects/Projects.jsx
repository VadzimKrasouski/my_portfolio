import React from 'react';
import styles from './Projects.module.css'
import Title from '../Common/Components/title/Title';
import ProjectBlock from "./ProjectBlock";
import socialImg from '../assets/images/socialNetwork.jpg';
import todoListImg from '../assets/images/todoList.jpg'
import counterImg from  '../assets/images/counter.png'

const Projects = () => {
    const socialNetworkImg = '../assets/images/socialNetwork.jpg'
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <Title text={'My Projects'}/>
                <div className={styles.projectBlocks}>
                    <ProjectBlock title={'Social Network'}
                                  description={'React + Redux'}
                                  link={'#'}
                                  urlimg={socialImg}/>
                    <ProjectBlock title={'TodoList'}
                                  description={'React + Redux'}
                                  link={'https://vadzimkrasouski.github.io/my_portfolio/'}
                                  urlimg={todoListImg}
                    />
                    <ProjectBlock title={'Counter'}
                                  description={'React + Redux'}
                                  link={'#'}
                                  urlimg={counterImg}
                    />
                </div>
            </div>
        </div>
    )
};

export default Projects;
