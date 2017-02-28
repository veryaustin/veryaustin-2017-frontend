import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import homeReducer from './homeReducer';
import workReducer from './workReducer';
import aboutReducer from './aboutReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    home: homeReducer,
    work: workReducer,
    about: aboutReducer
});

export default rootReducer;