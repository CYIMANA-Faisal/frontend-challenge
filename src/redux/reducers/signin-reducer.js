import { SIGNIN } from "../types/action-types";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN:
           return state;
 
        default: return state;
    }
};
export default reducer;