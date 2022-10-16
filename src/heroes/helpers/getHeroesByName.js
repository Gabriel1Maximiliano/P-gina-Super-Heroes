
import { heroes } from '../data/Heroes'

export const getHeroesByName = (name='') => {
   
    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) return [];
    let aux = heroes.filter(
        h=>h.superhero.toLocaleLowerCase().includes(name) )
   
   return aux
}