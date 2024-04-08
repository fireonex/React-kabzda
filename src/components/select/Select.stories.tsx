import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'select',
    component: Select
}

export const CustomSelect = () => {

    const [value, setValue] = useState(2)

    return (
        <Select onChangeSelect={setValue}
                value={value}
                items={[
                    {value: 1, title: 'Sam'},
                    {value: 2, title: 'John'},
                    {value: 3, title: 'Jake'},
                    {value: 4, title: 'Van'}
                ]}
        />
    )
}


export const CustomSelectWithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
        <Select onChangeSelect={setValue}
                value={value}
                items={[
                    {value: 1, title: 'Sam'},
                    {value: 2, title: 'John'},
                    {value: 3, title: 'Jake'},
                    {value: 4, title: 'Van'}
                ]}
        />
    )
}


// export const CustomSelect = () => {
//     return (
//         <Select value={'Choose name'} onChangeSelect={() => {}} items={
//             [
//                 {id: 1, name: 'Sam'},
//                 {id: 2, name: 'John'},
//                 {id: 3, name: 'Jake'},
//                 {id: 4, name: 'Van'}
//             ]
//         }/>
//     )
// }