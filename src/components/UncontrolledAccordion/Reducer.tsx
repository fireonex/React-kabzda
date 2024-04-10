type actionType = {
    type: string
}

export type stateType = {
    collapsed: boolean
}

export const reducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case 'SET-TOGGLE-COLLAPSED':
            return {
                ...state, collapsed: !state.collapsed
            }
        default:
            //return state
            throw new Error('Bad action type')
    }
}