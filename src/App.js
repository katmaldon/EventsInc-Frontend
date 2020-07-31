import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import EventsContainer from './Containers/EventsContainer';
import UserContainer from './Containers/UserContainer'
import NavBar from './Components/NavBar';
import Home from './Components/Home';

import { Route, Switch } from "react-router-dom";

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
        console.log("USER", this.state.currentUser)
        return (
            <div className='App'>
                <NavBar
                    currentUser={this.state.currentUser}
                />
                <Header />
                <Switch>
                    <Route path='/login' component={Login} />} />
                    <Route path='/signup' component={SignUp}/>
                    {/* <Route path='/events/:id' render={() => <div> event </div>} /> */}
                    <Route path='/events' render={() => <EventsContainer />} />
                    <Route path='/user' render={() => <UserContainer />} />
                    <Route path='/about' render={() => <About />} />
                    <Route path='/' component={Home} />
                    <Route render={() => <h1>WHOOPS! Wrong way...</h1>} />
                </Switch>
                <footer>©2020 MoKat Productions</footer>
            </div>
        );
    }
}

export default App;

