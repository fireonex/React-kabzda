import React from "react";

type AccordionPropsType = {
    block: string;
    collapsed: boolean;
    onChange: () => void
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return (
        <>
            <AccordionTitle block2={props.block} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody block2={props.block}/>}
        </>
    )
}

type AccordionTitlePropsType = {
    block2: string;
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onChange}>{props.block2}</h3>
}

type AccordionBodyPropsType = {
    block2: string;
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <div>
        {props.block2}
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    </div>
}

export default Accordion;