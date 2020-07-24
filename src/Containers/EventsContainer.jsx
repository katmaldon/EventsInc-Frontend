import React from 'react';
import Event from '.src/Components/Event';


const EventsContainer = (props) => {

    let eventCardsArr = props.events.map((eventPOJO) => {
        return (
            <Event
                key={eventPOJO.id}
                event={eventPOJO}
                deleteEvent={props.deleteEvent}
            />
        );
    });

    return (
        <section>
            <h2>Events</h2>
                <div className="event_cards">
                    {eventCardsArr}
                 </div>
        </section>
    );
};

export default EventsContainer;
