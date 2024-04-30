import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo'
}


export const SimpleExample = () => {

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    //сначала происходит отрисовка контента, и уже потом вызывается useEffect

    useEffect(() => {
        console.log('useEffect1')
        document.title = counter.toString()
    })//этот useEffect срабатывает каждый рендер компоненты

    useEffect(() => {
        console.log('useEffect2')
        document.title = counter.toString()
    }, [])//этот useEffect рендерится однажды (при первом рендере компоненты, когда она "вмонтируется")

    useEffect(() => {
        console.log('useEffect3')
        document.title = counter.toString()
    }, [counter])//этот useEffect рендерится при первом рендере компоненты и тогда,
                                    // когда то что внутри зависимости (counter) меняется



    return (
        <>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <div>{counter}</div>
            {fake}
        </>
    )
}