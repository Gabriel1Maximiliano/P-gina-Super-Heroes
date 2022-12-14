import React, { useMemo } from 'react'
import { GetHeroesByPublisher } from '../helpers/GetHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    
    const heroes =  useMemo(()=>GetHeroesByPublisher(publisher),[publisher]) 
 
    return (
       <div  className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map(el=>(
                    <HeroCard key={el.id} 
                    {...el}/>
                ))
            }
        </div>
       

       
    )
}


