import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { render, screen } from "@testing-library/react";
import { AuhtContext } from "../../auth/context/AuhtContext";
import { PublicRoute } from "../../router/PublicRoute";

describe('Pruebas sobre <PublicRouter />', () => {
    test('Debe mostrar el children si no esta autencticado', () => {
        const contextValue = {
            logged: false
        }
        render(
            <AuhtContext.Provider value={contextValue} >
               <PublicRoute >
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuhtContext.Provider>
        )

        expect(screen.getByText('Ruta pública')).toBeTruthy()
        screen.debug()
    });
    test('Debe navegar si esta autenticado ', () => {
        const contextValue = {
            logged: true,
            user  : 'gabriel'
        }
        render(
            <AuhtContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/login']} >
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute >
                    <h1>Ruta pública</h1>
                </PublicRoute>
                        }/>
                <Route path='/marvel' element={<h1>Página Marvel</h1>} />
                </Routes>
                </MemoryRouter>
            </AuhtContext.Provider>
        )

        expect(screen.getByText('Página Marvel')).toBeTruthy();
        screen.debug()
    })
})
