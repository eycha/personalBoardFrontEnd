import React, {useState} from 'react';
import './App.css';
import { Route, Routes, Outlet } from "react-router-dom";
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/boards" element={<DetailPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
