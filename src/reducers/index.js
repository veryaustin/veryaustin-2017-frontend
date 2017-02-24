import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import workReducer from './workReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    work: workReducer
});

export default rootReducer;