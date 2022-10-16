import React from 'react'
import { Link } from 'react-router-dom'

export const NotReagisteredUser = () => {
  return (
    <div>
        <p><b>REGISTRE SU USUARIO PARA PODER INGRESAR</b></p>
        <Link to='/login' ></Link>
    </div>
  )
}
