import { GET_ACTION, LOADING_ACTION } from "../actions/activityAction"

const initialState = {
    suggestion: [{
        activity: "",
        type: "",
        participants: null,
        price: null,
        link: "",
        key: null,
        accessibility: null
    }],
    isFetching: false,
    error:''
}
export const reducer = (state = initialState , action) => {
    switch(action.type){
        case GET_ACTION:
            return {
                ...state,
                suggestion: [ action.payload]
            }
        case LOADING_ACTION:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state
    }
}

  