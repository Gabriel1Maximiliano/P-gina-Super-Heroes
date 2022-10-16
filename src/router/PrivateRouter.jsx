import React, { useContext } from 'react'
import { AuhtContext } from '../auth/context/AuhtContext'
import {Navigate, useLocation} from 'react-router-dom';
import { MarvelPage } from '../heroes/pages/MarvelPage';
//import { Navbar } from '../UI/components/NavBar';

export const PrivateRouter = ({children}) => {
    
   const { logged }=useContext( AuhtContext );

   const {pathname,search}= useLocation();

   const lastPath = pathname+search;
   localStorage.setItem('lastPath',lastPath);
   console.log('re-render')

  return (logged) ? children: <Navigate to='/login' />
}
