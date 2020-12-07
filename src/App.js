import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';  
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Design from './components/design/Design';
import Features from './components/features/Features';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Landing />
                <Design />
                <Features />
            </div>
        </Router>
  );
}

export default App;
