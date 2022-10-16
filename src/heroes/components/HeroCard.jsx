import React from 'react'
import 'animate.css';
import{Link} from 'react-router-dom'
export const HeroCard = ({id,superhero, publisher, alter_ego,first_appearance,characters}) => {
    
   const a =require(`../../imagenes/${id}.jpg`)

  return (
    <div className='col animated__animated animate__fadeIn' >
        <div className='card'>
            <div className='row no-gutters' >
                 <div className='col-4 animated__animated animate__fadeIn'>
                 
                    <img src={a} className='card-img'alt={superhero} ></img>
                 </div>
                 <div className='col-8'>
                    <div className='card-body' >
                        <h5 className='card-title' >{ superhero }</h5>
                        <p>{alter_ego}</p>
                        {
                             (alter_ego!==characters) && (<p>{characters}</p>)
                        }
                        <p  className='card-text'>
                            <small className='text-muted' >{first_appearance}</small>
                        </p>

                        <Link  to= {`/hero/${id}`}>
                        Mas
                        </Link>
                            
                    </div>

                 </div>
            </div>

        </div>

    </div>
  )
}
