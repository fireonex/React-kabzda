import React from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";



export default {
    title: 'Uncontrolled Accordion stories',
    component: UncontrolledAccordion
}

const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion)

// const onChangeHandler = action('changing')

export const UncontrolledAccordionCollapsed = () => {
    return (
        <UncontrolledAccordion titleValue={'UncontrolledAccordion'}/>
    )
}