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

    deleteEvent = id => {
        let newArr = this.state.events.filter(event => { return event.id !== id })
        this.setState({
            events: newArr
        })
    };

    handleDelete = (id) => {
        const options = {
            method: "DELETE"
        }

        fetch(`http://localhost:3000/events/${id}`, options)
            .then(r => r.json())
            .then(this.fetchEvents)
    };

    likeEvent = (id) => {
        let updatedArr = this.state.events.map(event => {
            if (event.id === id) {
                event.favorite = !event.favorite
                return (event)
            }
            else { return event }
        })
        this.setState({
            events: updatedArr
        })
    }


    handleLike = (id) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                favorite: !this.props.favorite
            })
        }

        fetch(`http://localhost:3000/events/${id}`, options)
            .then(res => res.json())
            .then(e => {
                console.log(e);
                this.likeEvent(id)
            })
    };


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
                    deleteEvent={this.deleteEvent}
                    handleLike={this.handleLike}
                    likeEvent={this.likeEvent}
                />
                <EventForm
                    addEvent={this.addEvent}
                />
            </div>
        );
    };
};

export default EventsContainer;
