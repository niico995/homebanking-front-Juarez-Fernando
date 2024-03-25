//import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Loans from './pages/Loans'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import HeaderFooter from './layouts/HeadFoot'
import NewAcc from './pages/NewAcc'
import NewCard from './pages/NewCard'
import SignIn from './pages/SignIn'
import Transactions from './pages/Transactions'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/loans' element={<Loans />} />
          <Route path='/newAcc' element={<NewAcc />} />
          <Route path='/newCard' element={<NewCard />} />
          <Route path='/'  element={<SignIn/>} />
          <Route path='/signin'  element={<SignIn/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/transactions' element={<Transactions/>}/> 
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
