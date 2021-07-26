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
    console.log(selectedYears);

    const movies = selectedYears.filter(movie => movie.programType === 'movie')
    //console.log("Movies",movies);

    const selectedMovies = movies.slice(0, 21);
    console.log("Movies",selectedMovies);

    const sorted = selectedMovies.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    // console.log(sorted);

    
    return (
        <div>
            <h2  className="text-center" >{sorted.length}</h2>
            {
                 sorted.map(movie => <MovieInfo key={movie.title} movie = {movie} ></MovieInfo>)
            }
        </div>
    );
};

export default Movies;