import React, { useRef } from 'react';

const SearchHeader = () => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
    }

    const onKeyPress = (event) => {
        if (event.key === 'Enter'){
            handleSearch();
        }
    }

    const onClick = () => {
        handleSearch()
    }

    return (
        <header>
            <div>
                <h1>JOB SEARCH</h1>
            </div>
            <input type="search" placeholder="Search for a job..." ref={inputRef} onKeyPress={onKeyPress} />
            <button type="submit" onClick={onClick}>
                <img src="/images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default SearchHeader;