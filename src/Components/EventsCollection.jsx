import React from "react";
import Event from "./Event";

const EventsCollection = (props) => {

    return (
        <div className="event_cards">
            {props.events.map(event =>
                <Event key={event.id}
                    {...event}
                    deleteEvent={props.deleteEvent}
                />
            )}
        </div>
    );
};

export default EventsCollection;
