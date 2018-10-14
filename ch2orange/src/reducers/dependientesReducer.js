import {
    LLAMAR_DEP,
    ELIMINAR_DEP,
    EXITOSO_DEP,
    FALLO_DEP,
    EDITAR_DEP,
    LLAMAR_USUARIO,
    CONSULTAR_USUARIO,
    FALLO_CONSULTA,
    NOMBRE_COMPLETO,
    DEPENDENCIA,
    EDAD,
    EDITAR_EDAD_DEP,
    EDITAR_NOMBRE_COMPLETO,
    EDITAR_DEPENDENCIA,
    EXITOSO_DEP_EDITAR,
    VACIAR_FORMULARIO
} from '../types/dependientesTypes';

const INITIAL_STATE_DEP = {
    dependientes: [],
    cargando: false,
    error:'',
    nombre_completo:'',
    dependencia:'',
    edad:'',
    _usuario: '',
    dependiente_editar: {
        nombre_completo: '',
        dependencia: '',
        edad: '',
        _id:''
    },
    usuario_consultar: {
        nombre: '',
        apellidos: {
            paterno: '',
            materno: ''
        },
        _id: ''
    }
};

export default (state = INITIAL_STATE_DEP, action) =>
{
    switch (action.type)
    {
        case LLAMAR_DEP: return {...state, error:'', cargando: true};
        case ELIMINAR_DEP: return {...state, error: '', cargando: false};
        case EXITOSO_DEP: return {...state, dependientes: action.payload, cargando: false, error:''};
        case EXITOSO_DEP_EDITAR: return {...state, dependiente_editar: action.payload, cargando: false, error:''};
        case FALLO_DEP: return {...state, error:action.payload, cargando: false};
        case EDITAR_DEP: return {...state, dependiente_editar: action.payload, cargando: false, error:''};
        case LLAMAR_USUARIO: return { ...state, error: '', cargando: true };
        case CONSULTAR_USUARIO: return {...state, usuario_consultar: action.payload, cargando: false, error:''};
        case FALLO_CONSULTA: return { ...state, error: action.payload, cargando: false };
        case NOMBRE_COMPLETO: return {...state, nombre_completo: action.payload};
        case DEPENDENCIA: return {...state, dependencia: action.payload};
        case EDAD: return {...state, edad: action.payload};
        case EDITAR_NOMBRE_COMPLETO: return {...state, dependiente_editar: {...state.dependiente_editar, nombre_completo: action.payload}};
        case EDITAR_EDAD_DEP: return {...state, dependiente_editar: {...state.dependiente_editar, edad: action.payload}};
        case EDITAR_DEPENDENCIA: return {...state, dependiente_editar: {...state.dependiente_editar, dependencia: action.payload}};
        case VACIAR_FORMULARIO: return {...state, error:'', cargando:true, nombre_completo:'', edad:'', dependencia:''};
        default: return state;
    }
}