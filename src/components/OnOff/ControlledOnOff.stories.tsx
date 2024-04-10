import {action} from '@storybook/addon-actions'

import React, {useState} from "react";
import {ControlledOnOff} from "./СontrolledOnOff";



export default {
    title: 'ControlledOnOff stories',
    component: ControlledOnOff
}

const callbackHandler = action('on or off clicked')

const ControlledOnOffMemo = React.memo(ControlledOnOff)

export const OnMode = () => {
    return (
        <ControlledOnOffMemo on={true} onChangeHim={callbackHandler}/>
    )
}

export const OffMode = () => {
    return (
        <ControlledOnOffMemo on={false} onChangeHim={callbackHandler}/>
    )
}

export const ChangingMode = () => {
    let [value, setValue] = useState<boolean>(false)

    return (
        <ControlledOnOffMemo on={value} onChangeHim={setValue}/>
    )
}

