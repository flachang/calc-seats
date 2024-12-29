import React, { useState } from "react";
import reactDom from "react-dom";
import OperateSeats from "./src/App"

const formerSeats = 1
const MAX_VALUE = 100
const MIN_VALUE = 0

const Home = () => {
    return <OperateSeats seats={formerSeats} min={MIN_VALUE} max={MAX_VALUE} />
}

reactDom.render(<Home />, document.getElementById("root"));