import React from 'react';
import "./App.css"
import Lessons from "./pages/lessonsPage/Lessons";
import {Routes, Route} from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import Header from "./components/header/Header";
import HomeWorkPage from "./pages/homeWorkPage/HomeWorkPage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import ProfilePage from "./pages/profilePage/ProfilePage";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

const App = () => {
    return (
        <div className={"App"}>
            <Header/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/lessons" element={<Lessons/>}/>
                <Route path="/homework" element={<HomeWorkPage/>}/>
                <Route path="/settings" element={<SettingsPage/>}/>
                <Route path="/*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;