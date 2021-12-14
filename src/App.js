import React from 'react';
import './App.css';
import Introduction from './Component/Profile/Introduction';
import Fullname from './Component/Profile/Fullname';
import Adress from './Component/Profile/Adress';
import Profilephoto from './Component/Profile/Profilephoto';
import taswira from './autum.jpg'; 
import fac from './facebook.png';
import git from './github.png';
import you from './youtube.png';

const App = () => (
<div className="container"> 
       <img src={taswira}/>
       <Introduction/>   
       <Fullname/>   
       <Adress/>
       <Profilephoto/>
    <div className="social">
        <div className="card">
          <a  href="https://github.com/">
               <img  className="github"src = {git}/> </a>
          <a  href="https://facebook.com/">
              <img className="facebook" src ={fac}/> </a>
          <a  href="https://www.youtube.com/">
               <img className="youtube" src ={you} /></a>
        </div>
    </div>
</div>
    )
    

export default App;
