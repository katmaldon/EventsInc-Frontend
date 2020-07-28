import React, { Component } from 'react';

const Event = (props) => {

    return (
        <div className="cards_item">
            <div className="card">
                <div className="card_title"><h3>{props.name}</h3></div>
                <img src={props.image_url} alt={props.name} className="card_image" />
                <div className="event_card_content">
                    <div className="card_detail">
                        <h4>Type of event: {props.event_type}</h4>
                        <p>Date & time: {props.date}, {props.time}</p>
                        <p>Location: {props.location} </p>
                        <p>Price: ${props.price} </p>
                        <p>Event details: <a href={props.event_url}>{props.event_url}</a></p>
                    </div>
                    <p onClick={props.handleUpdateFavorite}>{props.favorite ? "💚" : "♡"}</p>
                    <button onClick={() => props.handleDelete(props.id)}>Delete event</button>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Event;


