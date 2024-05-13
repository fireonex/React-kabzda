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


export const SetTimeoutExample = () => {

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);


    // useEffect(() => {
    //     console.log('SetTimeout')
    //     setTimeout(() => {
    //         document.title = counter.toString()
    //     }, 1000)
    // },[counter])

    useEffect(() => {
        console.log('SetInterval')
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    },[])


    return (
        <>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <div>Counter: {counter}</div>
            Fake: {fake}
        </>
    )
}

// export const ClockVers2 = () => {
//
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//
//     const [time, setTime] = useState(seconds);
//     console.log('ClockVers2 rerender')
//
//     useEffect(() => {
//         console.log('UseEffect rerender')
//         setInterval(() => {
//             setTime(state => state + 1)
//         },1000)
//
//     },[])
//
//
//     return (
//         <>
//             <div>{hours}:{minutes}:{seconds}</div>
//         </>
//     )
// }