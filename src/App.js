import React from 'react';
import './App.css';
import Header from './Components/Header'
// import Login from './Components/Login'
import EventsContainer from './Containers/EventsContainer'
import NavBar from './Components/NavBar'
import { Route, Switch } from "react-router-dom";
// import UserContainer from './Containers/UserContainer'
// import TodosContainer from './Components/TodosContainer'

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Header />
            <EventsContainer />
            <Switch>
            <Route path='/events/:id' render={() => <div> event </div>} />
                <Route path='/events' render={() => <div> events </div>} />
                <Route path='/login' render={() => <div> login </div>} />
                <Route path='/about' render={() => <div> About </div>} />
                <Route path='/' render={() => <div> eve </div>} />
            </Switch>
            {/* <Login/> */}
            <footer>Kat@Mohamed</footer>
        </div>
    );
}

export default App;


/*
1. Routing
2. toggle
3.
*/