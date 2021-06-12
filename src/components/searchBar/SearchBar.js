import React, { useState } from 'react';
import './SearchBar.css';


function SearchBar(props) {
    const [query, setQuery] = useState('')

    function handleClick() {
        props.setLocationHandler(query);
    }

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            props.setLocationHandler(query);
        }
    };

  return (
    <span className="searchbar">
      <input
        type="text"
        name="search"
        placeholder="Zoek een stad in Nederland"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={keyPressCheck}
      />

      <button type="button"
      onClick={handleClick}
      >
        Zoek
      </button>
    </span>
  );
};

export default SearchBar;
