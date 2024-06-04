import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "../components/Home";
import Nav from '../components/Nav';
import Gellary from "../components/Gellary";
import About from "../components/About";
import User from "../components/User";
const MainRoute = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gellary" element={<Gellary/>} />
      </Routes>
    </div>
  )
}

export default MainRoute;