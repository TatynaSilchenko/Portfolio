import React from 'react';
import './App.css';
import Header from "./Header/Header";
import MainInfo from "./MainInfo/MainInfo";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Particles from 'react-particles-js'

const particlesOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        },
    color: {
        value: "#000000"
    },
    line_linked: {
        enable: true,
        color: "#656565",
        opacity: 0.5,
        width: 2
    }

}}

function App() {
    return (
        <div className="App">
                <Particles className="particles" params={particlesOpt}/>
                <Header/>
                <MainInfo/>
                <Skills/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
    );
}

export default App;
