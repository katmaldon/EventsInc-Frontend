import React from 'react';

class Search extends React.Component {

    handleInput = (evt) => {
    this.props.searchEvents(evt.target.value);
  };


    render() {
        return (
            <div className="search">
                <input
                    type="search"
                    placeholder={"Search for any event"}
                    value={this.props.search}
                    onChange={this.handleInput}
                />
            </div>
        );
    }

}

export default Search;

// function not passed properly, handle input
