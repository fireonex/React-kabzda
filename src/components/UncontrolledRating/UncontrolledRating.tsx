import React, {useState} from "react";

type RatingPropsType = {
     //value: 0|1|2|3|4|5;
    //propsCallbackFunc: (value:  0|1|2|3|4|5) => void
}
export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")

    let [value, setValue] = useState(4)


    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1)}}/>

            <Star selected={value > 1} setValue={() => {setValue(2)}}/>

            <Star selected={value > 2} setValue={() => {setValue(3)}}/>

            <Star selected={value > 3} setValue={() => {setValue(4)}}/>

            <Star selected={value > 4} setValue={() => {setValue((5))}}/>
        </div>

        //избавиться от кнопок, кликать по самим звёздочкам
        //функция приходит в props отсюда и меняет здесь state
    )
}

type StarPropsType = {
    selected: boolean
    // value: 1 | 2 | 3 | 4 | 5
    setValue: () => void
}


//на клик по span вызвать функцию которая приходит в props
function Star(props: StarPropsType) {
    console.log("Star rendering")

    // return (props.selected) ? <span onClick={() => propsCallbackFunc}><b>star</b></span> : <span onClick={() => propsCallbackFunc}>star</span>;

    return <span onClick={() => {props.setValue()}}>
        {(props.selected) ? <b>star </b> : 'star ' }
    </span>;

}