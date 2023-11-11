import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/signup/Signup';
import Dashboard from './Pages/dashboard/Dashboard';
import Analytics from './Pages/analytics/Analytics';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Signup />}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/analytics" element = {<Analytics/>}/>
        {/* <Route path = "/create-quiz" element = {<Create-Quiz/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
