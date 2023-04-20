import React from "react";

import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projcts from "./components/Projcts";
import Contacts from "./components/Contact";


export default function App() {
    return (
        <main>
            <Navbar />
            <AboutMe />
            <Projcts />
            <Contacts />
        </main>
    );
}