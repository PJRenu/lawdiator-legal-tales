import React from 'react';

const SearchBar = ({ query, setQuery, onSearch }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search legal cases..."
                onKeyPress={(e) => e.key === 'Enter' && onSearch()}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default SearchBar;