import { GET_ACTION } from "../actions/activityAction"
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

        default:
            return state
    }
}

  