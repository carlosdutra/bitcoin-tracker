import React from 'react'
import './Rate.css'

const Rate = (props) => {

    return (
        <div className="rate__wrap">
            <div className="rate__code">{props.code}</div>
            <div className="rate__desc">{props.desc}</div>
            <div className="rate__rate">{props.symbol}{props.rate?.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        </div>
    )
}

export default Rate
