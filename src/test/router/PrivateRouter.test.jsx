import { PrivateRouter } from "../../router/PrivateRouter";
import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuhtContext } from "../../auth/context/AuhtContext";
import { PublicRoute } from "../../router/PublicRoute";


describe('Pruebas sobre <PrivateRoutes />', () => {

    test('Debe mostrar el children si esta logeado ', () => {

        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged: true,
            user: 'gabriel'
        }
        render(
            <AuhtContext.Provider value={contextValue} >
                <MemoryRouter>
                    <PrivateRouter>
                        <h1>Ruta privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuhtContext.Provider>
        )

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();
        screen.debug()
    });



})
