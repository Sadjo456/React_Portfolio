import React from "react";

import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Projcts from "./components/Projcts";
import Contacts from "./components/Contact";


export default function App() {
    return (
        <main className= "text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <AboutMe />
            <Projcts />
            <Contacts />
        </main>
    );
}