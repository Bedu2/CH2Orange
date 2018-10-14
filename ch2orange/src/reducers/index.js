import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer';
import dependientesReducer from './dependientesReducer'

export default combineReducers({
    usuariosReducer,
    dependientesReducer,
});