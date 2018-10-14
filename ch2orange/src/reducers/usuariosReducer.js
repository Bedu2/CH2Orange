import {
    LLAMAR,
    EXITOSO,
    FALLO,
    NOMBRE,
    APELLIDOPATERNO,
    APELLIDOMATERNO,
    EDAD,
    EDITAR_NOMBRE,
    EDITAR_APPATERNO,
    EDITAR_APMATERNO,
    EDITAR_EDAD,
    USUARIO_EDITAR,
    ELIMINAR,
    VACIAR_FORMULARIO,
    PRIMER_GET
} from '../types/usuariosTypes';

const INITIAL_STATE = {
    usuarios: [],
    cargando: false,
    primer_get: false,
    error: '',
    nombre: '',
    apellidos: {
        paterno: '',
        materno: '',
    },
    edad: '',
    _id:'',
    usuario_editar:{
        nombre: '',
        apellidos: {
            paterno: '',
            materno: '',
        },
        edad: '',
        _id:''
    }
};

export default (state = INITIAL_STATE, action) =>
{
    const obtenerIndiceUsuario = (idUsuario) => state.usuarios.findIndex((usuario)=>{
        return usuario._id === idUsuario
    });

    switch (action.type)
    {
        case LLAMAR: return { ...state, error: '', cargando: true };
        case ELIMINAR: return {...state, error:'', cargando: false}
        case PRIMER_GET: return {...state, primer_get:true};
        case EXITOSO: return { ...state, usuarios: action.payload, cargando: false, error: ''};
        case FALLO: return { ...state, error: action.payload, cargando: false };
        case NOMBRE: return { ...state, nombre: action.payload };
        case APELLIDOPATERNO: return { ...state, apellidos:{ ...state.apellidos, paterno: action.payload}};
        case APELLIDOMATERNO: return { ...state, apellidos:{ ...state.apellidos, materno:action.payload}};
        case EDAD: return { ...state, edad: action.payload };
        case EDITAR_NOMBRE: return {...state,usuario_editar: {...state.usuario_editar,nombre: action.payload                }};
        case EDITAR_APPATERNO: return { ...state, usuario_editar:{ ...state.usuario_editar, apellidos:{...state.usuario_editar.apellidos, paterno: action.payload}}};
        case EDITAR_APMATERNO: return { ...state, usuario_editar:{ ...state.usuario_editar, apellidos:{...state.usuario_editar.apellidos, materno: action.payload}}};
        case EDITAR_EDAD: return { ...state, usuario_editar:{ ...state.usuario_editar, edad: action.payload}};
        case USUARIO_EDITAR: return {...state, usuario_editar: action.payload, cargando: false, error:''};
        case VACIAR_FORMULARIO: return {...state, error:'', cargando:true, nombre:'', edad:'', apellidos:{ ...state.apellidos, paterno:'', materno:''}};
        default: return state;
    }
}