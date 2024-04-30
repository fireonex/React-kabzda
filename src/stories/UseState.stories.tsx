import React, {useMemo, useState} from "react";

export default {
    title: 'UseState demo'
}

function generateData() {
    console.log('generate data')
    return 1;
}

export const Example1 = () => {

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData);

    //const changerFunc = (state: number) => state + 1

    return (
        <>
            <button onClick={() => {setCounter(state => state + 1)}}>+</button>
            <div>{counter}</div>
        </>
    )
}