import React, { useState } from 'react';
import './App.css';
import { Auth } from './components/Auth';

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState ("")

  if (!isAuth){
    return (
      <div>
        <Auth/>
      </div>
    );


  }

  return (
  <div>
    {room ? (<div> Chat </div>
    ) : (
    <div>
      <label> Enter Room Name :  </label>
      <input/>
      <button></button>
    </div>
    ) 
     <div>  }
  </div>
  )
  
}



export default App;
