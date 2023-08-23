
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/footer';
import Videos from './Components/Videos';
import Upload from './Components/Upload';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
    <Header/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Videos' element={<Videos/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>

   <Footer/>
    </Router>
  );
}

export default App;
