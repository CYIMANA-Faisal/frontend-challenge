import { combineReducers } from 'redux';
import signUpReducer from './signup-reducer';
import signInReducer from './signin-reducer';
import medicalDataReducer from './medical-data-reducer';

const rootReducer = combineReducers({
    signUp: signUpReducer,
    user: signInReducer,
    medicalData: medicalDataReducer,
});
export default rootReducer;