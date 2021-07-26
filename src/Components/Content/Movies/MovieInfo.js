import React from 'react';

const MovieInfo = (props) => {

    return (
        <div>
            {/* <img src={props.movie.images.url} alt="" /> */}
            <h2> {props.movie.title} </h2>
            
        </div>
    );
};

export default MovieInfo;