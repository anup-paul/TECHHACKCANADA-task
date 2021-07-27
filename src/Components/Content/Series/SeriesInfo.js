import React from 'react';

const SeriesInfo = (props) => {
    return (
        <div>
            <img style={{height:"100px"}}  src={props.series.images["Poster Art"].url} alt="" />
             <h2> {props.series.title} </h2>
        </div>
    );
};

export default SeriesInfo;