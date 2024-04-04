import React from "react";
import {Select} from "./Select";



export default {
    title: 'select',

}


export const UncontrolledInput = () => {
    return (
        <Select value={'Choose name'} onChangeSelect={() => {}} items={
            [
                {id: 1, name: 'Sam'},
                {id: 2, name: 'John'},
                {id: 3, name: 'Jake'},
                {id: 4, name: 'Van'}
            ]
        }/>
    )
}