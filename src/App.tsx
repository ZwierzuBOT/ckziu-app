// App.js
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./components/auth/SignUp";
import Login from './components/auth/Login';
import Header from './components/main/Header';
import Home from "./components/main/Home";
import { useState } from 'react';

function App() {

  const [IsAuth, SetIsAuth] = useState<boolean>(false);
  const [Color, SetColor] = useState<string>("");


  return (
    <Router>
      <div className="App">

        <Header color={Color} setColor={SetColor}/>
        <Routes>
          <Route path='/SignUp' element={<SignUp 
          isAuth={IsAuth} setIsAuth={SetIsAuth} color={Color} setColor={SetColor}/>} />

          <Route path='/Login' element={<Login  
          isAuth={IsAuth} setIsAuth={SetIsAuth} color={Color} setColor={SetColor}/>}/>

          <Route path='/' element={<Home 
          isAuth={IsAuth} setIsAuth={SetIsAuth}
          />}/>
        </Routes>
      </div>
    </Router>
  );
}



export default App;


