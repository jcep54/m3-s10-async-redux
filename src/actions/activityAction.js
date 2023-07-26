import axios from "axios";

export const GET_ACTION = "GET_ACTION";
export const LOADING_ACTION = 'LOADING_ACTION'

export const getAction = () => dispatch =>{
    dispatch({type: LOADING_ACTION})
    axios.get(`https://www.boredapi.com/api/activity`)
    .then(res =>{
        // console.log(res.data)
        dispatch({type:GET_ACTION, payload: res.data})
    })
    .catch(err => {
        console.log(err,'err')
    })
    .finally(dispatch({type: LOADING_ACTION}))
    
}
