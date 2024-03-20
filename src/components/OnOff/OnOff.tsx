import React, {useState} from 'react';

type OnOffPropsType = {
    // switching: boolean
    onChange: (on: boolean) => void
}


export const OnOff = (props: OnOffPropsType) => {
    console.log('onOff rendering')

    let [on, setOn] = useState(false)

    console.log('on: ' + on)

    const onStyle = {
        backgroundColor: on ? '#4e9a36' : 'white',
        width: '50px',
        display: 'inline-block',
        padding: '2px'
    }
    const offStyle = {
        backgroundColor: on ? 'white' : 'rgba(218, 34, 34, 0.94)',
        width: '50px',
        display: 'inline-block',
        padding: '2px'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '2px',
        backgroundColor: on ? '#4e9a36' : 'rgba(218, 34, 34, 0.94)'
    }

    const onClickedHandler = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClickedHandler = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={onClickedHandler}>
                On
            </button>
            <button style={offStyle} onClick={offClickedHandler}>Off</button>
            <div style={indicatorStyle}></div>
            {/*<div>{props.title}</div>*/}
        </div>
    );
};
