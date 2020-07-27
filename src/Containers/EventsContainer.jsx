import React from 'react';
import Event from '../Components/Event';


const EventsContainer = (props) => {
    // console.log(props);

    let eventCardsArr = props.events.map((eventPOJO) => {
        return (
            <Event

                key={eventPOJO.id}
                // event={eventPOJO}
                {...eventPOJO}
                deleteEvent={props.deleteEvent}
            />
        );
    });

    return (
        <section>
                <div className="event_cards">
                    {eventCardsArr}
                 </div>
        </section>
    );
};

export default EventsContainer;
