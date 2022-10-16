import { AppRouter } from "../../router/AppRouter";
import {render,screen} from '@testing-library/react';
import { AuhtContext } from "../../auth/context/AuhtContext";
import { MemoryRouter, Route, Routes } from 'react-router-dom'
describe('Pruebas sobre <AppRouter/>', () => { 

    test('should mostrar login si no esta autenticado', () => { 
        const contextValue ={
            logged:false,
        }
        render(
            <MemoryRouter initialEntries={['/login']} >
            <AuhtContext.Provider value={contextValue}>
      <AppRouter></AppRouter>
            </AuhtContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(2);
       //screen.debug()
     })
     test('Debe mostrar el componente si esta loggeado', () => { 
        const contextValue ={
            logged:true,
            user:'loza'
        }
        render(
            <MemoryRouter initialEntries={['/login']} >
            <AuhtContext.Provider value={contextValue}>
      <AppRouter></AppRouter>
            </AuhtContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getAllByText('MarvelPage').length).toBe(1);
      
      })
 })

