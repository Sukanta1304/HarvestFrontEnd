import axios from 'axios';
import * as types from './timer.actionType';

var url= process.env.REACT_APP_BACKEND_URL;

export const getTimeAPI = ()=> async (dispatch)=> {
    const token= localStorage.getItem("getharvesttoken")
    dispatch({type: types.GET_TIME_LOADING});
    try {
        const res = await axios.get(`${url}/project`,{
            headers:{
                'authorization':`Bearer ${token}`
            }
        });
        dispatch({type: types.GET_TIME_SUCCESS, payload: res.data});
    } catch {
        dispatch({type: types.GET_TIME_ERROR});        
    }
};

export const postTimeAPI = (data)=> async (dispatch)=> {
    const token= localStorage.getItem("getharvesttoken")
    dispatch({type: types.POST_TIME_LOADING});
    try {
        const res = await axios.post(`${url}/project/create`, data,{
            headers:{
                'authorization':`Bearer ${token}`
            }
        });       
        dispatch({type: types.POST_TIME_SUCCESS, payload: res.data});
    } catch {
        dispatch({type: types.POST_TIME_ERROR});        
    }
};

