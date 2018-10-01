import { LLAMAR, EXITOSO, FALLO, NOMBRE, APELLIDOPATERNO, APELLIDOMATERNO, EDAD, FORMA_EXITOSA} from '../types/usuariosTypes';

const INITIAL_STATE = {
    usuarios: [],
    cargando: false,
    error: '',
    nombre: '',
    apellidos: {
        Paterno: '',
        Materno: ''
        },
    edad: '',
    id:''
};

export default (state = INITIAL_STATE, action) =>
{
    switch (action.type)
    {
        case LLAMAR: return { ...state, error: '', cargando: true };
        case EXITOSO: return { ...state, error: '', cargando: false, usuarios: action.payload };
        case FALLO: return { ...state, error: action.payload, cargando: false };
        case NOMBRE: return { ...state, nombre: action.payload };
        case APELLIDOMATERNO: return { ...state, apellidos: {...state.apellidos, Materno:action.payload}};
        case APELLIDOPATERNO: return { ...state, apellidos: {...state.apellidos, Paterno:action.payload}};
        case EDAD: return { ...state, edad: action.payload };
        case FORMA_EXITOSA: return {...state, usuario: action.payload }
        default: return state;
    }
}