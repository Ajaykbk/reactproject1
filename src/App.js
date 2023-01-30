import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewRest from './components/ViewRest';


function App() {
  return (
    <div className="App">
    <Router>
       <Header></Header>
  
          <Routes>
            {/* path setting for restaurent list */}
            <Route path='/' element={<RestaurantList/>} />
             {/* path setting for view rest */}
             <Route path='/view-restaurant/:id' element={<ViewRest/>} />
            
          </Routes>

        <Footer></Footer>
    </Router>

    </div>
  );
}

export default App;
