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
const onClickHandler = action('some item was clicked')

export const collapsedAccordion = () => {
    return (
        <Accordion block={`collapsed accordion`} collapsed={true}
                   onChange={onChangeHandler} onClick={onClickHandler} items={[]}/>
    )
}

export const openAccordion = () => {
    return (
        <Accordion block={`open accordion`} collapsed={false}
                   onChange={onChangeHandler}
                   onClick={onClickHandler}
                   items={[
                       {id: 1, name: 'Sam'},
                       {id: 2, name: 'John'},
                       {id: 3, name: 'Jake'},
                       {id: 4, name: 'Van'}
                   ]}/>
    )
}

export const clickAccordion = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <Accordion block={`click accordion`} collapsed={collapsed}
                   onChange={() => {
                       setCollapsed(!collapsed)
                   }}
                   onClick={onClickHandler}
                   items={[
                       {id: 1, name: 'Sam'},
                       {id: 2, name: 'John'},
                       {id: 3, name: 'Jake'},
                       {id: 4, name: 'Van'}
                   ]}/>
    )
}