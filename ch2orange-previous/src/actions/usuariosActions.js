import axios from 'axios';
import { LLAMAR, EXITOSO, FALLO, EDAD, APELLIDOMATERNO, APELLIDOPATERNO, NOMBRE, FORMA_EXITOSA} from '../types/usuariosTypes';

-->//esta es la acción para realizar el cambio de propiedades por input

export const traerUsuarios = () => async (dispatch) =>
{
    dispatch({ type: LLAMAR });

    try {
      const response = await axios.get('https://g2-ch2.herokuapp.com/api/usuarios/orange');
      dispatch({ type: EXITOSO, payload: response.data });
    }
    catch(err) {
        dispatch({ type: FALLO, payload: err.message });
    }
};

-->//aquí termina la acción para realizar el cambio de propiedades por input

-->//esta es la acción para realizar el cambio de propiedades por input

export const cambiarInput = (type, valor) => async (dispatch) => {
    dispatch({type, payload: valor})
}
-->//aquí termina la acción para realizar el cambio de propiedades por input

-->//esta es la acción para enviar el formato llenado

export const enviarForma = (valores, usuarios) => async (dispatch) => {
    dispatch ({type: LLAMAR});

    try {
        const response = await axios.post('https://g2-ch2.herokuapp.com/api/usuarios/orange', valores);
        window.Materialize.toast('Usuario guardado exitosamente.', 5*1000);

        usuarios.unshift(response.data);

        dispatch({
            type: EXITOSO,
            payload: usuarios
        })

        dispatch({type: FORMA_EXITOSA});
    }
    catch(error) {
        dispatch({type: FALLO, payload: error.message});
        window.Materialize.toast('Intente más tarde.', 5*1000, 'red');
    }
}