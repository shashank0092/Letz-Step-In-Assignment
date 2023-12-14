import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import EducationDashboard from './Pages/EducationListing/EducationDashboard';
import RealStateDashboard from './Pages/RealStateListing/RealStateDashboard';
import DineOutPlaceDashboard from './Pages/DineOutPlaceListing/DineOutPlaceDasboard';
import FitnessDashboard from './Pages/FitnessLisiting/FitnessDashboard';
import Home from './Pages/Home/Home';



function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/education' element={<EducationDashboard/>} />
          <Route path='/realstate' element={<RealStateDashboard/>} />
          <Route path='/dineoutplace' element={<DineOutPlaceDashboard/>} />
          <Route path='/fitness' element={<FitnessDashboard/>} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
