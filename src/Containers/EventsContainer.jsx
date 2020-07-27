import React, { Component } from 'react';
import EventsCollection from '../Components/EventsCollection';
import EventForm from '../Components/EventForm';
import Search from '../Components/Search';


class EventsContainer extends Component {

    state = {
        events: [],
        search: ''
    }

    fetchEvents = () => {
        fetch('http://localhost:3000/events')
            .then(r => r.json())
            .then(events => {
                this.setState({ events });
            });
    };

    componentDidMount() {
        this.fetchEvents()
    };

    handleSearch = (search) => {
        this.setState({ search: search })
    };

    addEvent = (event) => {
        let newEvents = [...this.state.events, event];
        this.setState({
            events: newEvents,
        });
    };

    handleDelete = id => {
        const options = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
        }
        fetch(`http://localhost:3000/events/${id}`, options)
        .then(r => r.json())
        .then(this.fetchEvents)
    }

    //     let newArr = this.state.events.filter(event => { return event.id !== id })
    //     this.setState({
    //         events: newArr
    //     })
    // };


    render() {

        const filteredEvents = this.state.events.filter(event => event.name.toLowerCase().includes(this.state.search.toLowerCase()))

        return (
            <div>
                <Search
                    handleSearch={this.handleSearch}
                />
                <EventsCollection
                    events={filteredEvents}
                    handleDelete={this.handleDelete}
                />
                <EventForm
                    addEvent={this.addEvent}
                />
            </div>
        );
    };
};

export default EventsContainer;
