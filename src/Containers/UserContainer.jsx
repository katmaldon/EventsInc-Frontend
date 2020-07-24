import React from 'react';
import User from './Components/User'


const UserContainer = (props) => {

    return (
        <ul className="cards">
            <User
                key={1}
                user={props.user}
            />
        </ul>
    );
};


export default UserContainer;
