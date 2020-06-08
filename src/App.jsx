import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Freelancer from "./Freelancer/Freelancer";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const App = () => (
    <div className="App">
        <div className="portfolio">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Freelancer/>
            <Contact/>
            <Footer/>
        </div>
    </div>
);

export default App;
