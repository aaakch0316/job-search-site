import styles from './search_header.module.css';
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
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>JOB SEARCH</h1>
            </div>
            <input className={styles.input} type="search" placeholder="Search for a job..." ref={inputRef} onKeyPress={onKeyPress} />
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonimg} src="/images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default SearchHeader;