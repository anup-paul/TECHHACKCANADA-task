import React, { useEffect, useState } from 'react';
import SeriesInfo from './SeriesInfo';

const Series = () => {

    const [allEntries, setAllEntries] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data.entries);
            setAllEntries(data.entries);
        })    
    }, [])

    const selectedYears = allEntries.filter(entries => entries.releaseYear >= 2010)

    return (
        <div>
            {
                selectedYears.map(series => <SeriesInfo series={series} ></SeriesInfo>)
            }
        </div>
    );
};

export default Series;