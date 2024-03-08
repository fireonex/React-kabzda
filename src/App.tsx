import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log("App rendering")
  return (
      <div>
          <Accordion block={`Menu`} collapsed={true}/>
          <Accordion block={`Users`} collapsed={false}/>

          <Rating value={0}/>
          <Rating value={1}/>
          <Rating value={2}/>
          <Rating value={3}/>
          <Rating value={4}/>
          <Rating value={5}/>

          <OnOff switching={true}/>
      </div>

  );
}


type PageTitlePropsType = {
    title: string;
}


function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}
App();





const app = App;
    export default app;
