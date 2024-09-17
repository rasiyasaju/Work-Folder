import React from 'react';
import './App.css';
import Header from './componets/header/Header.js';
import Footer from './componets/footer/Footer.js';
import Home from './componets/pages/Home/Home.js';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>

        <Footer/>
      </div>
    );
  }
}

export default App;

