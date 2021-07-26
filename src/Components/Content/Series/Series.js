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

    const allSeries = selectedYears.filter(series => series.programType === 'series');
    
    const selectedSeries = allSeries.slice(0,21);
    console.log("series", selectedSeries);
    const sorted = selectedSeries.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    // console.log(sorted);

    return (
        <div>
            <h2  className="text-center" >{sorted.length}</h2>
            {
                sorted.map(series => <SeriesInfo key={series.title} series={series} ></SeriesInfo>)
            }
        </div>
    );
};

export default Series;