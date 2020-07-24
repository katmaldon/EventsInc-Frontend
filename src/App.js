import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import UserContainer from './Components/UserContainer'
import EventsContainer from './Components/EventsContainer'
import EventForm from './Components/EventForm'
import Search from './Components/Search'
//import TodosContainer from './Components/TodosContainer'
// import TodoForm from './Components/TodoForm'

class App extends React.Component {

    state = {
        events: [],
        user: { name: "Kat", age: 35, image_url: "https://i.imgur.com/ZuTBJfC.png", bio: "software engineer, quarantined but uncontained adventurer" },
        // hardcoded just for now
        search: ''
    };

    componentDidMount() {
        fetch('http://localhost:4000/events')
            .then(r => r.json())
            .then((events) => {
                this.setState({
                    events: events
                });
            });
    };

    returnEvents = () => {
        let events = this.state.eventsArray;
        return events;
    };

    addEvent = (eventPOJO) => {
        let newEvents = [...this.state.eventsArray, eventPOJO];
        this.setState({
            events: newEvents,
        });
    };

    deleteEvent = (id) => {
        let newArr = this.state.eventsArray.filter(event => { return event.id !== id })
        this.setState({
            eventsArray: newArr
        })
    };

    searchEvents = (search) => {
        this.setState({
            search: search,
        });
    };

    filteredEvents = () => {
        let searchArr = this.state.eventsArray.filter((event) =>
            event.name.toLowerCase().includes(this.state.search.toLowerCase())
        );
        return searchArr;
    };

    // additional functions

    render() {
        return (
            <div>
                <Header />
                <UserContainer
                    user={this.state.user}
                />
                <EventsContainer
                    //events={events}
                    //deleteEvent={this.deleteEvent}
                />
                <Search
                    search={this.state.search}
                    //searchEvents={this.searchEvents}
                    //filteredEvents={this.returnSearchedEvent}
                />
                <EventForm
                    //addEvent={this.addEvent}
                />
            </div>
        );
    }
}

export default App;
