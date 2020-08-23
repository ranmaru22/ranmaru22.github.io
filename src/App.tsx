import React from "react";

import Header from "./components/header";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";

import { projects } from "./projectData";

const App: React.FC = () => {
    return (
        <main id="home">
            <NavBar />
            <Header />
            <Projects projects={projects} />
            <About />
            <Footer />
        </main>
    );
};

export default App;
