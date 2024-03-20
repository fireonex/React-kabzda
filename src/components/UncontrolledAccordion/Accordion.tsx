import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    // const collapsed = false
    let [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {/*<button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </>
        //вместо кнопки кликать по h3, вызывая callback, который пришёл извне
    )
}

type AccordionTitlePropsType = {
    title: string;
    // collapsed: boolean
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

