import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuhtContext } from '../context/AuhtContext';

export const LoginPage = () => {
  const { login } = useContext( AuhtContext );
  const navigate = useNavigate();

  const handleLogin = () => {
      const lastPath = localStorage.getItem('lastPath') || '/'
    login('Gabriel Loza');

    navigate(lastPath,{
      replace: true
    })
  }
  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr></hr>

        <button className='btn btn-primary'
        
         onClick={handleLogin}>
          Login

        </button>
    </div>
  )
}
