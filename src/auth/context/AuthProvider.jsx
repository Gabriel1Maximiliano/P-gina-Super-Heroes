import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuhtContext } from './AuhtContext'
import { AuthReducer } from './AuthReducer'

// const initialState = {
//   logged: false,
// }
const init = () => {
  const user = JSON.parse( localStorage.getItem('user'))
  return{
    logged:!!user,
    user:user
  }
}

export const AuthProvider = ({children}) => {

  const [ authState, dispatch ]=useReducer( AuthReducer , {},init )

  const login = (name ='') => {
   
    const action ={
      type: types.login,
      payload:name
    }
    localStorage.setItem('user',JSON.stringify( name ))
    dispatch(action)
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action = {
      type:types.resetLocalState
    }
    dispatch(action)
  }
  return (
   <AuhtContext.Provider value={{
    //propiedades
    ...authState,
    //funciones
    login    :login,
    logout   :logout
   }}>
    { children }
   </AuhtContext.Provider> 
  )
}
