import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import Home from './Home';
import Player from './Player';



import './App.css';

function App() {
    return (
        <Router>
            <switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/player/:id" component={Player}></Route>
            </switch>
        </Router>
    );
}
export default App;
