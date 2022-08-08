import { SIGNIN } from './../types/action-types'

export const signInAction = (data)=> dispatch => {
    console.log(data);
    return {
       type: SIGNIN,
       payload: data
    };
};
