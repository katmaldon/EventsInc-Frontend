import React from "react";
import Event from "./Event";

const EventsCollection = (props) => {

    return (
        <div className="event_cards">
            {props.events.map(event =>
                <Event key={event.id}
                    {...event}
                    handleDelete={props.handleDelete}
                    deleteEvent={props.deleteEvent}
                    handleLike={props.handleLike}
                />
            )}
        </div>
    );
};

export default EventsCollection;
