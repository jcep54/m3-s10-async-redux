import axios from "axios";

export const GET_ACTION = "GET_ACTION";

export const getAction = () => dispatch =>{
    axios.get(`https://www.boredapi.com/api/activity`)
    .then(res =>{
        // console.log(res.data)
        dispatch({type:GET_ACTION, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}