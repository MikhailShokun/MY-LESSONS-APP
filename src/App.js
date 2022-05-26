import React from 'react';
import "./App.css"
import Lessons from "./pages/lessonsPage/Lessons";
import {Routes, Route} from "react-router-dom";
import SignIn from "./pages/loginPage/SignIn";
import Header from "./components/header/Header";

const App = () => {
    return (
        <div className={"App"}>
            <Header/>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/lessons" element={<Lessons/>}/>
            </Routes>
        </div>
    );
};

export default App;