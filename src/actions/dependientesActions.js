import axios from 'axios';
import {
    LLAMAR_DEP,
    EXITOSO_DEP,
    FALLO_DEP,
    EDITAR_DEP,
    FORMA_EXITOSA_DEP,
    ELIMINAR_DEP,
    LLAMAR_USUARIO,
    CONSULTAR_USUARIO,
    FALLO_CONSULTA
}
    from '../types/dependientesTypes';

export const traerDependientes = (_usuario) => async (dispatch) =>
{
    dispatch({type: LLAMAR_DEP});
    try {
        const response=await axios.get(`https://g2-ch2.herokuapp.com/api/dependientes_usuario/orange/${_usuario}`);
        response.data.reverse();
        dispatch({type:EXITOSO_DEP, payload: response.data});
    }
    catch(err){
        dispatch({type:FALLO_DEP, payload: err.message});
    }
};

export const consultarUsuario = (id) => async (dispatch) => {

    dispatch ({type: LLAMAR_USUARIO});
    try {
        const response = await axios.get(`https://g2-ch2.herokuapp.com/api/usuarios/orange/${id}`);
        dispatch ({ type: CONSULTAR_USUARIO, payload: response.data[0] })
    }
    catch(error) {
        dispatch({type: FALLO_CONSULTA, payload: error.message});
    }
};

export const cambiarInput = (type, valor) => async (dispatch) => {
    dispatch({type, payload: valor})
};

export const enviarFormaDep = (_usuario, valores, dependientes) => async (dispatch) => {
    dispatch({type:LLAMAR_DEP});
    try{
        const response = await axios.post(`https://g2-ch2.herokuapp.com/api/dependientes_usuario/orange/${_usuario}`, valores);
        window.Materialize.toast('Dependiente guardado exitosamente.', 5*1000);
        dependientes.unshift(response.data)
        dispatch({
            type:EXITOSO_DEP,
            payload: dependientes
        });
    }
    catch(error) {
        dispatch({type: FALLO_DEP, payload:error.message});
        window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
    }
}


