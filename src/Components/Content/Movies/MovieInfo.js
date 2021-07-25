import React from 'react';

const MovieInfo = (props) => {

    
   
    return (
        <div>
            {
                props.movie.programType === "movie" && props.movie.releaseYear >= "" && <h2> {props.movie.title} </h2>
            }
        </div>
    );
};

export default MovieInfo;