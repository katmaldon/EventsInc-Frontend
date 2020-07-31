import React from 'react';

class User extends React.Component {

    render() {
        return (
            <li className="user_card">
                <div className="user_card">
                    <img src={this.props.user.image_url} alt={this.props.user.name} className="card_image" />
                    <div className="card_content">
                        <div className="user_name">
                            <h1>{this.props.user.name} ({this.props.user.age})</h1>
                        </div>
                        <div className="card_detail">
                            <h2>{this.props.user.location}</h2>
                            <h3>{this.props.user.bio}</h3>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}

export default User;
