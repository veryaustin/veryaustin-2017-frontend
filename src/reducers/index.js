import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import workReducer from './workReducer';
import aboutReducer from './aboutReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    work: workReducer,
    about: aboutReducer
});

export default rootReducer;