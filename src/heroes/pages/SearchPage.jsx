import React from 'react'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import {useNavigate,useLocation} from 'react-router-dom';
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName';
export const SearchPage = () => {
const navigate = useNavigate()
const location = useLocation();

const {q=''} = queryString.parse( location.search );
console.log(q)

const heroes = getHeroesByName(q)
    const { searchText, onInputChange,} = useForm({
            searchText:''
        })
        const handleSubmit = (e) => {
            e.preventDefault();
            if(searchText.trim().lenght ===0){
                return
            }
           navigate(`?q=${searchText.toLowerCase().trim()}`)
        }


    return (
        <>
            <h1>SearchPage</h1>

            <h4>Searching</h4>
            <hr />
            <div className='row' >
                <div className='col-5' >
                    <form onSubmit={handleSubmit} >
                        <input type="text"
                            placeholder='Search a heroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className='btn btn-outline-primary mt-1' 
                        >
                            Search
                        </button>
                    </form>
                </div>

            <div className='col-7' >

                <h4>Results</h4>
                <hr />
                <div className='alert alert-primary' >
                    Search a hero
                </div>
                {
                    heroes.length == 0 && <div className='alert alert-danger'><b>There is no results</b></div>
                }
            
                
            
            {
               heroes && heroes.map(h=>(
                    <HeroCard key={h.id} {...h}/> 
                ))
            }
           {/* <HeroCard />*/}
            </div>
            </div>

        </>
    )
}
