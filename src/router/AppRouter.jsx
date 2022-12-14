import React from 'react'
import { Routes, Route } from "react-router-dom";


import{LoginPage} from '../auth/pages/LoginPage'

import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {
  return (
    <>
   
     <Routes>
       
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        
        <Route path="/*" element={
          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>
           }/>

      
        
      </Routes>
    </>
  )
}
