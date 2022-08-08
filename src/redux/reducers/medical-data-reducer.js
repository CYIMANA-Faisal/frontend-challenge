import { GET_MEDICAL_DATA } from "../types/action-types";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_MEDICAL_DATA:
          return {...action.payload};
        default: return state;
    }
};
export default reducer;