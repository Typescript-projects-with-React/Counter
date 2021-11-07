export const actionTypes = {
    INCREMENT_COUNTER: "COUNT_MODIFICATION",
    DECREMENT_COUNTER: "DECREMENT_COUNTER"
}

export interface CounterAction {
    type: string;

}

const initialState = {
    counter: 0
};

export const countReducer = (state: any = initialState, action: CounterAction): any => {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }

        default:
            return state
    }
}

export const increment = () => {
    return function (dispatch: (arg0: { type: string; }) => void) {
        dispatch({type: actionTypes.INCREMENT_COUNTER})
    }
}