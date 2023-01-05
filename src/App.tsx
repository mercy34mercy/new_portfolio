import React from 'react';
import me from './assets/me.jpg';
import twitter from './assets/logo_twitter.png'
import facebook from './assets/logo_facebook.png'
import github from './assets/logo_github.png'
import linkedin from './assets/logo_linkedin.png'
import instagram from './assets/logo_instagram.png'

import './App.css';

const App = () => {
  return (
    <div className="home">

        <div className="maincontainer">
          <div className="photoarea img-wrap">
            <img className="myphoto" src={me} alt="..." />
          </div>
          <div className="namearea">
            <p className="vertical">Masashi &nbsp;&nbsp;Kobayashi</p>
          </div>
          </div>

          <div className="img-container">
            <a href="https://www.facebook.com/profile.php?id=100044776764162"><img src={facebook} className="logo" alt="..." /></a>
            <a href="https://twitter.com/mashikotyan34"><img src={twitter} className="logo" alt="..." /></a>
            <a href="https://www.instagram.com/mercy34r/"><img
              src={instagram}
              className="logo"
              alt="..."
            /></a>
            <a href="https://github.com/mercy34mercy"><img src={github} className="logo" alt="..." /></a>
            <a href="https://www.linkedin.com/in/%E9%9B%85%E5%8F%B2-%E5%B0%8F%E6%9E%97-92aaa91a7/"><img src={linkedin} className="logo" alt="..." /></a>
          </div>
     
    </div>
  )
}


export default App;
