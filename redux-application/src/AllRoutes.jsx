import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Test from "./test";
import Navbar from "./Navbar";
import Getdata from "./GetData";

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/getdata' Component={<Getdata />}></Route>
                <Route path='/test' Component={<Test />}></Route>
            </Routes>
            

        </>
    )
}

export default AllRoutes;