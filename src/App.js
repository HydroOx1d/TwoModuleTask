import './App.css';
import React from 'react'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
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
          <Route path="/profile" component={Profile}/>
          <Route path="/news" component={News}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
