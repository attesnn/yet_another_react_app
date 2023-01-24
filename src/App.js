import React, { useState } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';
import styles from "./index.css"
const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState (null)

  if (!isAuth){
    return (
      <div>
        <Auth/>
      </div>
    );
  }

  return (
  <div className="container mx-auto bg-gray-200 rounded-xl">
    {room ? (<div> Chat </div>
    ) : (
    <div className="m-5 p-10">
      <label> Enter Room Name :  </label>
      <input/>
      <button></button>
    </div>    
    )     
    }
    <p className="text-3xl text-gray-700 font-bold mb-5 py-9">Content</p>
  </div>
  );     
}

export default App;
