import React, {useReducer} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    titleValue: string;
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    //let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: 'SET-TOGGLE-COLLAPSED'})}/>
            {!state.collapsed && <AccordionBody/>}
        </>
        //вместо кнопки кликать по h3, вызывая callback, который пришёл извне
    )
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")

    return (
        <h3 onClick={() => {props.onClick()}}>
            {props.title}
        </h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
    </ul>
}

