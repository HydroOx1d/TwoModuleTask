import './App.css';
import React from 'react'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Add from './Components/Add/Add';
import News from './Components/News/News';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route exact path="/" component={Profile}/>
          <Route path="/news" component={News}/>
          <Route path="/add" component={Add}/>
          <Route path="/contact" component={Contact}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
