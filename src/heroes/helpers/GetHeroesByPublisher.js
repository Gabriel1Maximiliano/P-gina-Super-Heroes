import { heroes } from "../data/Heroes";



export const GetHeroesByPublisher = ( publisher ) => {
  const validPublisher = ['Marvel Comics','DC Comics'];

  if( !validPublisher.includes( publisher ) ){
       return
    //throw new Error `${publisher} no existe`
  }
  return heroes.filter(hero => hero.publisher === publisher)
}
