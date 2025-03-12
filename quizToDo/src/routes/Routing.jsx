import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';



function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/Register" element={<Register/>}/>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/Home" element={<Home/>}/>

                      
                            
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
