import React from 'react';

type OnOffPropsType = {
    onChangeHim: (on: boolean) => void
    on: boolean
}


export const ControlledOnOff = (props: OnOffPropsType) => {
    console.log('onOff rendering')

    console.log('on: ' + props.on)

    const onStyle = {
        backgroundColor: props.on ? '#4e9a36' : 'white',
        width: '50px',
        display: 'inline-block',
        padding: '2px'
    }
    const offStyle = {
        backgroundColor: props.on ? 'white' : 'rgba(218, 34, 34, 0.94)',
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
        backgroundColor: props.on ? '#4e9a36' : 'rgba(218, 34, 34, 0.94)'
    }


    return (
        <div>
            <button style={onStyle} onClick={() => props.onChangeHim(true)}>On</button>
            <button style={offStyle} onClick={() => props.onChangeHim(false)}>Off</button>
            <div style={indicatorStyle}></div>
            {/*<div>{props.title}</div>*/}
        </div>
    );
};
