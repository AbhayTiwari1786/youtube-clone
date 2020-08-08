import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/search/searchTerm">
          
            
              <h1>This Is Search Page</h1>
          </Route>
          
          <Route path="/">
            
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />

            </div>
          </Route>

        </Switch>
      </Router>
     
      
      

      
    
    </div>
  );
}

export default App;
