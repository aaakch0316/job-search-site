import SearchHeader from '../search_header/search_header'
import React from 'react';
import Carousel from '../carousel/carousel';

const Home = () => {
    return (
        <div>
            {/* <SearchHeader /> */}
            <h3>HOME</h3>
            {/* <form action="/report" method="get">
                <input placeholder="Search for a job" required name="word" />
                <button>Search</button>
            </form> */}
            <Carousel />
        </div>
    )
}

export default Home;