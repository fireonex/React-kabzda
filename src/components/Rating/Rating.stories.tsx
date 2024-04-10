import {action} from '@storybook/addon-actions'
import {Rating, RatingValueType} from "./Rating";
import React, {useState} from "react";



export default {
    title: 'Rating stories',
    component: Rating
}

const SelectRating = React.memo(Rating)

export const EmptyRating = () => {
    return (
        <SelectRating value={0} onClick={() => {}}/>
    )
}

export const Rating1 = () => {
    return (
        <SelectRating value={1} onClick={() => {}}/>
    )
}

export const Rating2 = () => {
    return (
        <SelectRating value={2} onClick={() => {}}/>
    )
}

export const Rating3 = () => {
    return (
        <SelectRating value={3} onClick={() => {}}/>
    )
}

export const Rating4 = () => {
    return (
        <SelectRating value={4} onClick={() => {}}/>
    )
}

export const Rating5 = () => {
    return (
        <SelectRating value={5} onClick={() => {}}/>
    )
}

export const ChangeRating = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)

    return (
        <SelectRating value={ratingValue} onClick={setRatingValue}/>
    )
}