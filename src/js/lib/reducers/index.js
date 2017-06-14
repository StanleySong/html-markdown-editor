import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'


const reducers = {
    routing
}

const rootReducer = combineReducers(reducers);

export default rootReducer
