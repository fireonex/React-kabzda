import React from 'react';

type OnOffPropsType = {
    switching: boolean
    //title: 'On' | 'Off'
}

export const OnOff = (props: OnOffPropsType) => {
    // if (props.switching) {
    //     return <button className={'onButton'}>{'On'}</button>
    // } else {
    //     return <button className={'offButton'}>{'Off'}</button>
    // }

    return (
        <div>
            {props.switching && <button className={'onButton'}>On</button>}
            {!props.switching && <button className={'offButton'}>Off</button>}

            {/*<div>{props.title}</div>*/}
        </div>
    );
};
