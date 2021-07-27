import React from 'react';

const MovieInfo = (props) => {

    return (
        <div>
            <img style={{height:"100px"}}  src={props.movie.images["Poster Art"].url} alt="" />
            <h2> {props.movie.title} </h2>
            
        </div>
    );
};

export default MovieInfo;