import React from 'react';
import Header from './componets/header/Header.js';
import Footer from './componets/footer/Footer.js';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <div className="content">
          <h2>Welcome to My Website</h2>
          <p>This is a simple website Header and Footer created by using React and CSS.</p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

