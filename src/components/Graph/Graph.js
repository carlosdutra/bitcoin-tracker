import React, { useState, useEffect } from 'react'
import { Line, defaults } from 'react-chartjs-2';

const Graph = () => {

    const [prices, setPrices] = useState([]);
    const [dates, setDates] = useState([]);
    const [updated, setUpdated] = useState('')

    useEffect(() => {

        fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
            .then(results => results.json())
            .then(data => {
                setPrices(Object.values(data.bpi))
                setDates(Object.keys(data.bpi))
                setUpdated(data.time?.updated)
                // console.log(data);
            });

    }, [prices, dates, updated])

    defaults.animation = false;
    const state = canvas => {
        const ctx = canvas.getContext('2d');
    
        return {
            labels: dates,
            datasets: [{
                label: 'Bitcoin price in USD',
                lineTension: 0,
                backgroundColor: 'tomato',
                borderColor: 'rgba(0,0,0)',
                borderWidth: 2,
                data: prices
            }],
        };
    }

    return (
        <div>
            <p>{updated}</p>
            <Line
                data={state}
            />
        </div>
    )
}

export default Graph
