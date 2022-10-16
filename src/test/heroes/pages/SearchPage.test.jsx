import {screen,useNavigate,fireEvent,render} from '@testing-library/react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

import {MemoryRouter} from 'react-router-dom';
import { SearchPage } from '../../../heroes/pages/SearchPage';


describe('Pruebas sobre <SearchPage />', () => { 
    test('should mostrarse correctamente con valores por defecto ', () => { 
           const {container}=render(
            <MemoryRouter>
              <SearchPage />  
            </MemoryRouter>
           )

          expect( container ).toMatchSnapshot()
     })
     test('should mostrarse correctamente batman con el valor del queryString', () => { 

         render(
             <MemoryRouter initialEntries={['/search?q=batman']} >
           <SearchPage />  
         </MemoryRouter>
        )
        
        expect(screen.getByText('Batman')).toBeTruthy();
        
       
  })
  test('should first', () => { 
    render(
        <MemoryRouter initialEntries={['/search?q=batman']} >
      <SearchPage />  
    </MemoryRouter>
   )
   })
 })