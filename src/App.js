import React from 'react';
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Login from './Components/Login'
import EventsContainer from './Containers/EventsContainer'
import NavBar from './Components/NavBar'
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home';
// import UserContainer from './Containers/UserContainer'
// import TodosContainer from './Components/TodosContainer'

function App(props) {
    return (
        <div className='App'>
            <NavBar />
            <Header />
            <Switch>
            <Route path='/events/:id' render={() => <div> event </div>} />
                <Route path='/events' render={() => <EventsContainer />} />
                <Route path='/login' render={() => <Login />} />
                <Route path='/about' render={() => <About/> } />
                <Route path='/' render={() => <Home/>} />
            </Switch>
            <footer>©2020 MoKat Productions</footer>
        </div>
    );
}

export default App;

