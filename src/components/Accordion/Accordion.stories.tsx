import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion';
import React, {useState} from "react";


export default {
    component: Accordion
}


//---------------------------------------------------------

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };
//
// export default meta;

// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         block: 'hello',
//         collapsed: true,
//         // onChange: () => {}
//     }
// }

//---------------------------------------------------------

const onChangeHandler = action('changing')

export const collapsedAccordion = () => {
    return (
        <Accordion block={`collapsed accordion`} collapsed={true}
                   onChange={onChangeHandler}/>
    )
}

export const openAccordion = () => {
    return (
        <Accordion block={`open accordion`} collapsed={false}
                   onChange={onChangeHandler}/>
    )
}

export const clickAccordion = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion block={`click accordion`} collapsed={collapsed}
                   onChange={() => {setCollapsed(!collapsed)}}/>
    )
}