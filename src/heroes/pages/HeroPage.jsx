import React, { useMemo } from 'react'
import {useParams,Navigate,useNavigate} from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {

  const {id} = useParams();

  const navigate = useNavigate()

  const heroe = useMemo(()=>getHeroById(id),[id])// se dispara cada vez q su dependencia cambie  

  
  const handleNavigateBack = () => {
    navigate('/',{
      replace: true
    })
  }
  if(!heroe){
    return <Navigate to='/marvel' />
  }

  return (
    <div className='row mt-5' >
      <div className='col-4' >
        <img
        src={require(`../../imagenes/${id}.jpg`)}
        alt={heroe.superhero}
        className='img-thumbnail'
        />
      </div>
      <div className='col-8' >
        <h3>{ heroe.superhero }</h3>
        <ul className='List-goup list-group-flush' >
          <li>
            <b className='list-group-item' >Alter ego: {heroe.alter_ego}</b>
            <b className='list-group-item' >Publisher: {heroe.publisher}</b>
            <b className='list-group-item' >First Appearence: {heroe.first_appearance}</b>
          </li>
        </ul>
        <h5 className='mt-3' >Characters</h5>
        <p>{ heroe.characters }</p>
        <button className='btn btn-primary' 
        onClick={handleNavigateBack}>
          Back
        </button>
      </div>
    </div>
  )
}
