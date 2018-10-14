import axios from 'axios';
import {
    LLAMAR,
    EXITOSO,
    FALLO,
    USUARIO_EDITAR,
    ELIMINAR,
    VACIAR_FORMULARIO,
    PRIMER_GET
}
from '../types/usuariosTypes';

export const desplegarUsuarios = () => async (dispatch) =>
{
    dispatch({ type: LLAMAR });

    try {
        const response = await axios.get('https://g2-ch2.herokuapp.com/api/usuarios/orange');
        response.data.reverse();
        dispatch({ type: EXITOSO, payload: response.data });
        dispatch({ type: PRIMER_GET});
    }
    catch(err) {
        dispatch({ type: FALLO, payload: err.message });
    }
};

export const cambiarInput = (type, valor) => async (dispatch) => {
    dispatch({type, payload: valor})
};

export const enviarForma = (valores, usuarios) => async (dispatch) => {
    dispatch ({type: LLAMAR});

    try {
        const response = await axios.post('https://g2-ch2.herokuapp.com/api/usuarios/orange', valores);
        usuarios.unshift(response.data);
        dispatch({
            type: EXITOSO,
            payload: usuarios
        });
        dispatch({
            type:VACIAR_FORMULARIO
        });
        window.Materialize.toast('Usuario guardado exitosamente.', 5*1000);
    }
    catch(error) {
        dispatch({type: FALLO, payload: error.message});
        window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
    };
};

export const enviarEditado = (id, valores, usuarios) => async (dispatch) => {
    dispatch ({type: LLAMAR});

    try {
        const response = await axios.post(`https://g2-ch2.herokuapp.com/api/usuarios/orange/${id}`, valores);
        window.Materialize.toast('Usuario editado exitosamente.', 5*1000);
        usuarios.unshift(response.data);
        dispatch({
            type: EXITOSO,
            payload: usuarios
        });
    }
    catch(error) {
        dispatch({type: FALLO, payload: error.message});
        window.Materialize.toast('No se actualizó usuario.', 5*1000, 'red');
    }
}

export const llamarEditado = (id) => async (dispatch) => {

    dispatch ({type: LLAMAR});
    try {
        const response = await axios.get(`https://g2-ch2.herokuapp.com/api/usuarios/orange/${id}`);
        dispatch ({ type: USUARIO_EDITAR, payload: response.data[0] })
    }
    catch(error) {
        dispatch({type: FALLO, payload: error.message});
        window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
    }
};

export const cambiarEditado = (type, editado) => async (dispatch) => {
    dispatch ({ type: type, payload: editado})
};

export const borrarUsuario = (id) => async (dispatch) => {
    dispatch ({type: ELIMINAR});
    try {
        const response = await axios.delete(`https://g2-ch2.herokuapp.com/api/usuarios/orange/${id}`);
        window.Materialize.toast('Usuario eliminado exitosamente.', 5*1000);
        window.location.reload();
    }
    catch(error) {
        dispatch({type: FALLO, payload: error.message});
        window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
    }
};