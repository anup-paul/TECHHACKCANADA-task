import React, { useEffect, useState } from 'react';
import MovieInfo from './MovieInfo';

const Movies = () => {

    const [allEntries, setAllEntries] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data.entries);
            setAllEntries(data.entries);
        })    
    }, [])

    const selectedYears = allEntries.filter(entries => entries.releaseYear >= 2010);
    selectedYears.sort();
    console.log(selectedYears)

    return (
        <div>
            <h2  className="text-center" >{selectedYears.length}</h2>
            {
                 selectedYears.map(movie => <MovieInfo movie = {movie} ></MovieInfo>)
            }
        </div>
    );
};

export default Movies;