import React from 'react';
import Event from '../Components/Event';


const EventsContainer = props => {
    console.log(props);
    // return(
    //     <div>
    //        {props.events.map(eventPOJO => <Event key={eventPOJO.id} deleteEvent={props.deleteEvent} likeEvent={props.handleLike}/>)}
    //     </div>
    // )
    // // let eventCardsArr = props.events.map((eventPOJO) => {
    // //     return (
    // //         <Event
    // //             key={eventPOJO.id}
    // //             {...eventPOJO}
    // //             deleteEvent={props.deleteEvent}
    // //             likeEvent={props.handleLike}
    // //         />
    // //     );
    // // });

    return (
        <section>
            <div className="event_cards">
                    {/* {eventCardsArr} */}
                {props.events.map(eventPOJO => <Event key={eventPOJO.id} {...eventPOJO} deleteEvent={props.deleteEvent} likeEvent={props.handleLike}/>)}
            </div>
        </section>
    );
};

export default EventsContainer;
