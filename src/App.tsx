import React, {useState} from 'react';
import './App.css';

import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {OnOff} from "./components/OnOff/OnOff";
import {ControlledOnOff} from "./components/OnOff/СontrolledOnOff";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [on, setOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            {/*<Accordion block={`Menu`} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
            {/*<Accordion block={`Users`} collapsed={false}/>*/}

            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<ControlledOnOff on={on} onChangeHim={setOn}/>*/}

            <OnOff onChange={setOn}/> {on.toString()}

            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}

            {/*<UncontrolledRating/>*/}
        </div>
    );
}


type PageTitlePropsType = {
    title: string;
}


function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
