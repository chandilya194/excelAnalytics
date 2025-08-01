import { useState } from 'react'
import axios from 'axios';
import { Login } from './pages/login';
import{BrowserRouter, Routes,Route} from 'react-router-dom';
import { Register } from './pages/register';
import { Dashboard } from './pages/dashboard';
import { Check } from './pages/check';


function App() {
 

  return (
    <>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap"
      />
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/check' element={<Check/>}></Route>
    </Routes>
     
      </BrowserRouter>
    </>
   
  )
}

export default App
