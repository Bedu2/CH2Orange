import axios from 'axios';
import {
    LLAMAR_DEP,
    EXITOSO_DEP,
    FALLO_DEP,
    LLAMAR_USUARIO,
    CONSULTAR_USUARIO,
    FALLO_CONSULTA,
    EXITOSO_DEP_EDITAR,
    VACIAR_FORMULARIO
}
    from '../types/dependientesTypes';
import {ELIMINAR, EXITOSO, FALLO, LLAMAR} from "../types/usuariosTypes";

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

export const enviarFormaDep = (valores, dependientes) => async (dispatch) => {
    dispatch({type:LLAMAR_DEP});
    try{
        const response = await axios.post(`https://g2-ch2.herokuapp.com/api/dependientes/orange/`, valores);
        window.Materialize.toast('Dependiente guardado exitosamente.', 5*1000);
        dependientes.unshift(response.data);
        dispatch({
            type:EXITOSO_DEP,
            payload: dependientes
        });
        dispatch({
            type:VACIAR_FORMULARIO,
            payload: dependientes
        });
    }
    catch(error) {
        dispatch({type: FALLO_DEP, payload:error.message});
        window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
    }
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
};

export const borrarDependiente = (id) => async (dispatch) => {
    dispatch ({type: ELIMINAR});
    try {
        const response = await axios.delete(`https://g2-ch2.herokuapp.com/api/dependientes/orange/${id}`);
        window.Materialize.toast('Usuario eliminado exitosamente.', 5*1000);
    }
    catch(error) {
        dispatch({type: FALLO, payload: error.message});
        window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
    }
};

export const llamarDependiente = (id) => async (dispatch) =>
{
    dispatch({type: LLAMAR_DEP});
    try {
        const response=await axios.get(`https://g2-ch2.herokuapp.com/api/dependientes/orange/${id}`);
                dispatch({type:EXITOSO_DEP_EDITAR, payload: response.data[0]});
    }
    catch(err){
        dispatch({type:FALLO_DEP, payload: err.message});
        window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
    }
};

export const cambiarDependiente = (type, editado) => async  (dispatch) =>{
    dispatch ({type: type, payload: editado});
};


export const enviarDepEditado = (id, valores, dependientes) => async (dispatch) => {
    dispatch ({type: LLAMAR_DEP, });

    try {
        const response = await axios.post(`https://g2-ch2.herokuapp.com/api/dependientes/orange/${id}`, valores);
        window.Materialize.toast('Dependiente editado exitosamente.', 5*1000);
        //dependientes.unshift(response.data);
        dispatch ({
            type: EXITOSO_DEP_EDITAR,
            payload: dependientes
        });

    }catch (err) {
        dispatch({type:FALLO_DEP, payload: err.message});
        window.Materialize.toast('No se actualizó dependiente intente más tarde.', 5*1000, 'red');
    }
};

