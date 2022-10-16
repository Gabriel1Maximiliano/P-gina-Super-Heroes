
import { heroes } from '../data/Heroes'

export const getHeroById = (id) => {
  
  return heroes.find( h => h.id ===id)

}
