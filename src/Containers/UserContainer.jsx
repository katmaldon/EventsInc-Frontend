import React from 'react';
import User from '../Components/User'
import TodosContainer from './TodosContainer';
import TodoForm from '../Components/TodoForm'


class UserContainer extends React.Component {

    fetchUsers = () => {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(users => {
                this.setState({ users });
            });
    };
    componentWillMount() {
        this.fetchUsers()
    }


}

export default UserContainer;
