import React from "react";

import Header from "./components/header";
import NavBar from "./components/navbar";
import About from "./components/about";

const App: React.FC = () => {
    return (
        <>
            <NavBar />
            <Header />
            <About />
        </>
    );
};

export default App;
