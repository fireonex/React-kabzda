import {action} from '@storybook/addon-actions'

import React from "react";
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'Uncontrolled Rating stories',
    component: UncontrolledRating
}

const UncontrolledRatingMemo = React.memo(UncontrolledRating)

export const UncontrolledRatingStory = () => {
    return <UncontrolledRatingMemo/>
}

