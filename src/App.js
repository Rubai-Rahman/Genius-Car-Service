import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Addservice from './Pages/AddService/Addservice';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRute/PrivateRoute';
import ManageServices from './Pages/ManageServices/ManageServices';
import Notfound from './Pages/Notfound/Notfound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
           <Header/>
          <Routes>
            <Route  path='/'element={<Home/>} />
            <Route path='/home'element={<Home/>} />
            <Route path='/login'element={<Login/>} />
            <Route path ='/*' element={<PrivateRoute/>}>
            <Route path='booking/:serviceID'element={<Booking/>} />
            <Route path='addService'element={<Addservice/>} />
            <Route path='manageService'element={<ManageServices/>} />
            </Route>
            <Route path='*'element={<Notfound/>} />
          </Routes>
         </Router>
        </AuthProvider>
      
    </div>
  );
}

export default App;
