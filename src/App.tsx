import React from "react";

import Header from "./components/header";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import About from "./components/about";

import { projects } from "./projectData";

const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Projects projects={projects} />
            <About />
        </>
    );
};

export default App;
