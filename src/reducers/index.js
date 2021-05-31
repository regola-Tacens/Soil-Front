import  { combineReducers} from 'redux';
import authReducer from './auth'
import themes from './themes'
import pictures from './pictures'
import tag from './tag'

export const reducers = combineReducers({ authReducer, themes, pictures, tag });