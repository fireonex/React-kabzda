import React from "react";

type accordionArrayType = {
    id: any
    name: string
}

type AccordionPropsType = {
    block: string;
    collapsed: boolean;
    onChange: () => void
    items: Array<accordionArrayType>
    onClick: (id: any) => void
}


export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return (
        <>
            <AccordionTitle block2={props.block} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody block2={props.block} items={props.items} onClick={props.onClick}/>}
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
    items: Array<accordionArrayType>
    block2: string
    onClick: (id: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                {
                    props.items.map((el) =>
                        <li key={el.id} onClick={() => {props.onClick(el.id)}}>{el.name}</li>
                    )
                }
            </ul>
        </div>
    )
}
