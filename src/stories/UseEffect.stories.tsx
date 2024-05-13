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


export const SetIntervalExample = () => {

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
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return (
        <>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <div>Counter: {counter}</div>
            Fake: {fake}
        </>
    )
}


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);

    console.log('ResetEffectExample rendered with ' + counter)

    useEffect(() => {
        console.log('Effect occurred ' + counter)

        return () => {
            console.log('reset effect ' + counter)
        }
    }, [counter])


    return (
        <>

            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <div>Counter: {counter}</div>
        </>
    )
}


export const KeysTrackerExample = () => {

    const [text, setText] = useState('');


    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((text) => text + e.key)
        }

        window.document.addEventListener('keypress', handler)

        return () => {
            window.document.removeEventListener('keypress', handler)
        }
    }, [text])


    return (
        <>
            <div>Text: {text}</div>
        </>
    )
}


export const SetTimeoutExample = () => {

    const [text, setText] = useState('');


    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('Timeout expired')
            console.log('3 seconds have passed')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])


    return (
        <>
            <div>Text: {text}</div>
        </>
    )
}