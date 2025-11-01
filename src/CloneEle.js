import React from "react";

const Father = ({ children }) => {

    const newChildren = React.cloneElement(children, { age: 18 })

    return <div>{newChildren}</div>
}

const Son = ({ age }) => <div>{` 我永远${age}岁 `}</div>

export default function () {
    return <Father>
        <Son />
    </Father>
}