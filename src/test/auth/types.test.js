import { types } from "../../auth/types/types"

types
describe('Pruebas sobre types ', () => { 
    test('Debe matchaer con "[Auth] Login"', () => { 
    
        const login = '[Auth] Login';

        expect( types.login ).toBe('[Auth] Login');    
    
    });
     const logout = '[Auth] Logout'
     test('Debe matchear con "[Auth] Logout"', () => {  


         expect( types.logout ).toBe('[Auth] Logout');
      });

      test('Debe matchear con "[Reset] Clean"', () => { 
        
        expect(types.resetLocalState).toBe('[Reset] Clean')
       })
 })