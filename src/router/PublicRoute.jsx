import React, { useContext } from 'react'
import { AuhtContext } from '../auth/context/AuhtContext'
import {Navigate} from 'react-router-dom';

export const PublicRoute = ({children}) => {
    const { logged }=useContext( AuhtContext );
    
     return (!logged) ? children: <Navigate to='/marvel' />
}
