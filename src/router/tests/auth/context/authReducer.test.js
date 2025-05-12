import { authReducer } from "../../../../auth/context/authReducer"
import { types } from "../../../../auth/types/types";

describe('pruebas en el authReducer', () => { 

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });

    });

    test('debe de llamar el login y autenticar el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Pol',
                id: '123'
            }
        }

        const state = authReducer({ logged: false }, action );
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })

    });

    test('debe de hacer logout y borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: {
                name: 'Pol',
                id: '123'
            }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );
        expect( newState ).toEqual({ logged: false });

    });


})