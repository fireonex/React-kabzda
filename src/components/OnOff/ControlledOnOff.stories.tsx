import {action} from '@storybook/addon-actions'

import React, {useState} from "react";
import {ControlledOnOff} from "./СontrolledOnOff";
import {RatingValueType} from "../Rating/Rating";


export default {
    title: 'ControlledOnOff stories',
    component: ControlledOnOff
}

const callbackHandler = action('on or off clicked')

export const OnMode = () => {
    return (
        <ControlledOnOff on={true} onChangeHim={callbackHandler}/>
    )
}

export const OffMode = () => {
    return (
        <ControlledOnOff on={false} onChangeHim={callbackHandler}/>
    )
}

export const ChangingMode = () => {
    let [value, setValue] = useState<boolean>(false)

    return (
        <ControlledOnOff on={value} onChangeHim={setValue}/>
    )
}

