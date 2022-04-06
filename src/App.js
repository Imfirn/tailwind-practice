import React,{useState,useEffect} from 'react';
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './pages';
import {Routes,Route}from"react-router-dom";
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './component/Dropdown';

function App() {
  const [isOpen,setIsOpen] = useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen);
  }
  useEffect(()=>{
    const hideMenu =()=>{
      if(window.innerWidth>766 && isOpen){
        setIsOpen(false)
        console.log("i resizeddd")
      }
    }
    window.addEventListener('resize',hideMenu)
    return()=>{
      window.removeEventListener('resize',hideMenu);
    }
  })
  return (
    <>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu"  element={<Menu/>}/>
      <Route path="/about"  element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
