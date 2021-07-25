import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to="/movies" >Movies</Link>
            <br />
            <Link to="/series" >Series</Link>
        </div>
    );
};

export default Home;