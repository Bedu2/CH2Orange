import {
    LLAMAR_DEP,
    ELIMINAR_DEP,
    EXITOSO_DEP,
    FALLO_DEP,
    EDITAR_DEP,
    LLAMAR_USUARIO,
    CONSULTAR_USUARIO,
    FALLO_CONSULTA
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
        depenendencia: '',
        edad: ''
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
        case FALLO_DEP: return {...state, error:action.payload, cargando: false};
        case EDITAR_DEP: return {...state, dependiente_editar: action.payload, cargando: false, error:''};

        case LLAMAR_USUARIO: return { ...state, error: '', cargando: true };
        case CONSULTAR_USUARIO: return {...state, usuario_consultar: action.payload, cargando: false, error:''};
        case FALLO_CONSULTA: return { ...state, error: action.payload, cargando: false };
        default: return state;
    }
}