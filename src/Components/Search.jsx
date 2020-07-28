import React from 'react';

const Search = props => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder={"Search for any event"}
                onChange={(e) => props.handleSearch(e.target.value)}
            />
        </div>
    );
}


export default Search;

