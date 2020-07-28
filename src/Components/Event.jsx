import React from 'react';

class Event extends React.Component {
    state = {
        favorite: false
    }

    componentDidMount () {
        const  favorite = this.props.favorite
        this.setState({ favorite })
    }

    handleDelete = e => {
        fetch(`http://localhost:3000/events/${this.props.id}`, {
            method: "DELETE"
        })
            .then(r => r.json())
            .then( deletedEvent => {
                this.props.deleteEvent(this.props.id);
            });
    }

    handleUpdateFavorite = () => {
        fetch(`http://localhost:3000/events/${this.props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ favorite: !this.props.favorite })
        })
            .then(res => res.json())
            .then(e => {
                console.log(e);
                this.props.updateFavorite(this.props.id)
            })
    }

    render() {
        let { name, image_url, event_type, date, time, location, event_url } = this.props

        return (
            <div className="cards_item">
                <div className="card">
                    <div className="card_title"><h3>{name}</h3></div>
                    <img src={image_url} alt={name} className="card_image" />
                    <div className="event_card_content">
                        <div className="card_detail">
                            <h4>Type of event: {event_type}</h4>
                            <p>Date & time: {date}, {time}</p>
                            <p>Location: {location} </p>
                            <p>Event details: <a href={event_url}>{event_url}</a></p>
                        </div>
                        <p onClick={this.handleUpdateFavorite}>{this.props.favorite ? "💚" : "♡"}</p>
                        <button onClick={this.handleDelete}>Delete event</button>
                    </div>
                </div><br></br>
            </div>
        );
    }
}

export default Event;
