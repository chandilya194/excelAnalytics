import { useState } from 'react'
import axios from 'axios';
import { Login } from './pages/login';
import{BrowserRouter, Routes,Route} from 'react-router-dom';
import { Register } from './pages/register';
import { Dashboard } from './pages/dashboard';


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
     
      </BrowserRouter>
    </>
   
  )
}

export default App
