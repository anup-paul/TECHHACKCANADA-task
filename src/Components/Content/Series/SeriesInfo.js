import React from 'react';

const SeriesInfo = (props) => {
    return (
        <div>
            {
                props.series.programType === "series" && <h2> {props.series.title} </h2>
            }
        </div>
    );
};

export default SeriesInfo;