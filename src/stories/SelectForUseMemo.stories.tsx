import React, {useMemo, useState} from "react";
import {Select} from "../components/select/Select";


export default {
    title: 'select with useMemo and ReactMemo',
    component: Select
}


const SelectMemo = React.memo(Select)


const cities = [
    {value: 1, title: 'Moscow', country: 'Russia', population: 12655050},
    {value: 2, title: 'Los Angeles', country: 'USA', population: 3970000},
    {value: 3, title: 'Paris', country: 'France', population: 2148000},
    {value: 4, title: 'Berlin', country: 'Germany', population: 3669491},
    {value: 5, title: 'New York', country: 'USA', population: 8419000},
    {value: 6, title: 'Novosibirsk', country: 'Russia', population: 1620162},
    {value: 7, title: 'Las Vegas', country: 'USA', population: 641676}
];


export const CustomSelect1 = () => {

    const [value, setValue] = useState(2)
    const [citiesList, setCitiesList] = useState(cities)

    const newArr1 = useMemo(() => {
        return citiesList.filter(u => u.country === 'USA')
    }, [citiesList])

    return (
        <>
            <div>
                cities in Russia filter
            </div>
            <SelectMemo onChangeSelect={setValue}
                        value={value}
                        items={newArr1}
            />
        </>
    )
}


export const CustomSelectWithoutValue2 = () => {

    const [citiesList, setCitiesList] = useState(cities)
    const [value, setValue] = useState(null)

    const addUserHandler = () => {
        const newCity = {value: 8, title: 'Irkutsk', country: 'Russia', population: 800676}
        setCitiesList(
            [...cities, newCity]
        )
    }


    return (
        <>
            <button onClick={addUserHandler}>
                add Irkutsk
            </button>

            <SelectMemo onChangeSelect={setValue}
                        value={value}
                        items={citiesList}
            />
        </>
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