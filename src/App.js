// import Tiny from './tiny';
import React from "react";
import {useState} from "react";
import NavComponent from "./components/nav";
import {Outlet} from "react-router-dom";

function App() {
    const [navList, setNavList] = useState([
        {linkName: "Home", linkTo: "/"},
        {linkName: "Sign in", linkTo: "/signin"},
        {linkName: "Sign up", linkTo: "/signup"},
        {linkName: "About", linkTo: "/about"}
    ]);

    return (
        <div className="App">
            <NavComponent navList={navList} />
            <Outlet />
        </div>
  );
}

export default App;
