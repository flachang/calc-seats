import React, { useState } from "react";
import './index.scss'

function calcInitSeats(seats) {
    return seats
}


// 
const OperateSeats = ({ seats, min, max }) => {
    const [displaySeats, setDisplaySeats] = useState(calcInitSeats(seats))

    const onPlus = () => {

        if (displaySeats >= max) return
        setDisplaySeats(v => v + 1)
    }

    const onMinus = () => {

        if (displaySeats <= min) return
        setDisplaySeats(v => v - 1)
    }

    const onChange = (e) => {
        const inputNum = Number(e.target.value)

        console.log(e.target.value)

        if (inputNum < min) {
            setDisplaySeats(min)
            return
        }

        if (inputNum > max) {
            setDisplaySeats(max)
            return
        }

        setDisplaySeats(inputNum)
    }

    return (
        <h1 className="demo">
            <div className="minus symbol" onClick={onMinus}>-</div>

            <input type="number" value={displaySeats} onChange={onChange} max={max} min={min} />

            <div className="plus symbol" onClick={onPlus}>+</div>
        </h1>
    )
}

export default OperateSeats
