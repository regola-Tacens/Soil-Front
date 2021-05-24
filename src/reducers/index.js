import  { combineReducers} from 'redux';
import authReducer from './auth'
import themes from './themes'
import pictures from './pictures'

export const reducers = combineReducers({ authReducer, themes, pictures });