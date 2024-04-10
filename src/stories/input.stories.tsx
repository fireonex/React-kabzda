import React, {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'input',

}


export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return (
        <>
            <input onChange={onChangeInputHandler}/> - {value}
        </>
    )
}


export const GetValueOfUncontrolledInputOnButtonPress = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const saveButtonHandler = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={saveButtonHandler}>
                Save
            </button>
            Actual value: {value}
        </>
    )
}

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return (
        <input value={parentValue} onChange={onChangeInputHandler}/>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
    }

    return (
        <input type={"checkbox"} onChange={onChangeInputHandler}/>
    )
}


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChangeSelectHandler}>
            <option>None</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'hey'}/>

