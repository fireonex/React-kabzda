import {action} from '@storybook/addon-actions'
import React from "react";
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff stories',
    component: OnOff
}

const callbackHandler = action('on or off clicked')

const OnOffMemo = React.memo(OnOff)

export const ChangedOnOff = () => {
    return (
        <OnOffMemo onChange={callbackHandler} defaultOn={true}/>
    )
}

export const ChangedOnOff2 = () => {
    return (
        <OnOffMemo onChange={callbackHandler} defaultOn={false}/>
    )
}

export const DefaultInput = () => {
    return <input defaultValue={'text'}/>
}

