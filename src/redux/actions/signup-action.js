import { v4 as uuidv4 } from 'uuid';
import { SIGNUP } from './../types/action-types'

export const signUpAction = (data) => dispatch => {
    const id = uuidv4()
    data.id = id;
    return {
        type: SIGNUP,
        payload: data
    };
};
