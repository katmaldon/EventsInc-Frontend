import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup'
import EventsContainer from './Containers/EventsContainer';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

import { Route, Switch } from "react-router-dom";
// import UserContainer from './Containers/UserContainer'
// import TodosContainer from './Components/TodosContainer'

class App extends Component {

    state = {
        currentUser: null
    };

    componentDidMount() {
        const token = localStorage.token

        if (token) {

            fetch("http://localhost:3001/api/v1/auto_login", {
                headers: {
                    "Authorization": token
                }
            })
                .then(res => res.json())
                .then(response => {
                    if (response.errors) {
                        alert(response.errors)
                    } else {
                        this.setState({
                            currentUser: response
                        })
                    }
                })
        }
    }

    setUser = (response) => {
        this.setState({
            currentUser: response.user
        }, () => {
            localStorage.token = response.token
            this.props.history.push("/events")
        })

    }

    logout = () => {
        this.setState({
            currentUser: null
        }, () => {
            localStorage.removeItem("token")
            this.props.history.push("/login")
        })
    }
    render() {
        return (
            <div className='App'>
                <NavBar
                    currentUser={this.state.currentUser}
                />
                <Header />
                <Switch>
                    <Route path='/login' render={() => <Login setUser={this.setUser} />} />
                    <Route path='/signup' render={() => <Signup setUser={this.setUser} />} />
                    <Route path='/events/:id' render={() => <div> event </div>} />
                    <Route path='/events' render={() => <EventsContainer />} />
                    <Route path='/about' render={() => <About />} />
                    <Route path='/' render={() => <Home />} />
                    <Route render={() => <h1>WHOOPS! Wrong way...</h1>} />
                </Switch>
                <footer>©2020 MoKat Productions</footer>
            </div>
        );
    }
}

export default App;

