import {screen,render,fireEvent} from '@testing-library/react';
import { AuhtContext } from '../../auth/context/AuhtContext';
import { Navbar } from '../../UI/components/Navbar';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom'

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas sobre <NAvBAr> ', () => { 
const contextValue = {
    logged: true,
    user:'gabriel',
    logout:jest.fn()

}
beforeEach( () => jest.clearAllMocks() )


    test('Debe mostrar el nombre de usuario', () => { 


        render(
            <AuhtContext.Provider value={contextValue}>
                <MemoryRouter>
                   <Navbar></Navbar>
                </MemoryRouter>
            </AuhtContext.Provider>
        )
//screen.debug()
expect( screen.getByText('gabriel') ).toBeTruthy();


     })
     test('Deebe llamara y NAvigate y logout cuando se hace click ', () => { 
        render(
            <AuhtContext.Provider value={contextValue}>
                <MemoryRouter>
                   <Navbar></Navbar>
                </MemoryRouter>
            </AuhtContext.Provider>
        )

        const logoutBtn = screen.getByRole('button');

        fireEvent.click( logoutBtn );
        expect(contextValue.logout).toHaveBeenCalled()
       // expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true})
    
    })
})