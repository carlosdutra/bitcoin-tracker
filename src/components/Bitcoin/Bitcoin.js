import {React, useState, useEffect} from 'react'
import Rate from 'components/Rate'
import './Bitcoin.css'

const Bitcoin = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(results => results.json())
        .then(data => {
            setData(data);
            console.log(data);
        });

    }, [data])

    return (
        <div>
            <div className="bitcoin__title">
                <h1>{data.chartName} now</h1>
                <p>Last updated: {data.time?.updated}</p>
            </div>

            <div className="grid__rates">
                <Rate
                    code={data.bpi?.USD?.code}
                    desc={data.bpi?.USD?.description}
                    rate={data.bpi?.USD?.rate_float}
                    symbol={"\u0024"}
                />
                <Rate
                    code={data.bpi?.EUR?.code}
                    desc={data.bpi?.EUR?.description}
                    rate={data.bpi?.EUR?.rate_float}
                    symbol={"\u20AC"}
                />
                <Rate
                    code={data.bpi?.GBP?.code}
                    desc={data.bpi?.GBP?.description}
                    rate={data.bpi?.GBP?.rate_float}
                    symbol={"\u00A3"}
                />
            </div>
            <h6>{data.disclaimer}</h6>
        </div>
    )
}

export default Bitcoin
