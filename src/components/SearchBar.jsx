import React from "react";

const SearchBar = ({ query, setQuery }) => {
    return (
        <input
            type="text"
            className="search-input"
            placeholder="Search for recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default SearchBar;
