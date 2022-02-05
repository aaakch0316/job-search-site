import react from 'react';

const Home = () => {
    return (
        <div>
            <h3>HOME</h3>
            <form action="/report" method="get">
                <input placeholder="Search for a job" required name="word" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Home;