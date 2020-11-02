import React from 'react';
import logo from './Star Logo 07-2.png';
import heroimage from './Hero image option 1 edit 2.png';
import './App.css';

function App() {
  return (

    <div className="container">

      <div className="topnav">

        <div className="logo">
          <img src={logo} />
        </div>

        <div className="links">
          <a href="#">HOME</a>
          <a href="#">FEATURES</a>
          <a href="#">TEACHERS</a>
        </div>

        <div className="langLog">

          <button>lang+flags</button>
          <button>Register | Log in</button>

        </div>

      </div>
      <header className="appHeader">
        <img src={heroimage} />
        <div className="headerText">
          <p>Prepare young minds for a better <span>future.</span></p>
          <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
          <div className="headerButtons">
            <button className="LearnMore">Learn More</button>
            <button className="signUp">Sign Up</button>
          </div>
        </div>

      </header>
    </div>

  );
}

export default App;
