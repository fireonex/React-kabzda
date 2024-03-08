import React from "react";

type AccordionPropsType = {
    block: string;
    collapsed?: boolean;
}


function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return (
        <>
            <AccordionTitle block2={props.block}/>
            { !props.collapsed && <AccordionBody block2={props.block}/>}
        </>
    )

}



type AccordionTitlePropsType = {
    block2: string;
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <>{props.block2}</>
}

type AccordionBodyPropsType = {
    block2: string;
}


function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <>{props.block2}</>
}

export default Accordion;