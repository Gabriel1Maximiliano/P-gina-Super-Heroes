import { render,screen } from "@testing-library/react";
import { type } from "@testing-library/user-event/dist/type";
import { AuthReducer } from "../../../auth/context/AuthReducer";
import { types } from "../../../auth/types/types";

describe('Probando el AuthReducer', () => { 

    test('debe retornar el estado por defecto', () => { 
    const state = AuthReducer({logged:false},{});
    expect( state ).toEqual(state)
     })
     test('debe llamar el login autenticar y establecer el user', () => { 
      const action = {
        type:types.login,
        payload:'gabriel'
      }

      const state = AuthReducer({logged:false},action);
      expect( state.logged).toBe(true);
      expect ( state.user ).toBe('gabriel')
    })
    test('debe llamar el logout y borrar el user  el user', () => { 
        const state = {
            logged:true,
            user:'gabriel'
        }
        const action ={
            type: types.logout
        }

        const newState = AuthReducer(state,action)
         expect( newState.logged ).toBe(false);
         expect( newState.user ).toBe(null);
         expect( newState ).toEqual({logged:false,user:null});
    })
 })

  