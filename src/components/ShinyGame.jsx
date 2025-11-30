import React, { useContext, useEffect, useState } from 'react'
import LoadingText from './LoadingText';
import useStreak from '../hooks/useStreak';
import PokemonDisplay from './PokemonDisplay';
import Streak from './Streak';
import useFetchPokemon from '../hooks/useFetchPokemon';
import { useLocation } from 'react-router-dom';
import { ProgressContext } from '../context/ProgressContext'

const ShinyGame = () => {
        
    const [response, setResponse] = useState(null);
    const [streak, highest, increment, reset] = useStreak();
    const [fetchPokemon, pokemon, isShiny] = useFetchPokemon();
    const location = useLocation();
    const selectedGens = location.state?.gens; 

    const {updateProgress} = useContext(ProgressContext);

    const handleAwnser = (awnser) =>{
        const isRight = awnser === isShiny
        isRight ? increment() : reset()
        updateProgress(isRight, selectedGens?.[0]?.id, highest)
        setResponse(isRight)
    }
    useEffect(()=> {
        fetchPokemon(selectedGens)
    }, [fetchPokemon, selectedGens])
    useEffect(() => {
        if (response != null) {
            setTimeout(() => {
                fetchPokemon(selectedGens)
                setResponse(null)
            }, 1000)
        }
    }, [response, fetchPokemon, selectedGens])

    if (!pokemon) {
        return(
            <LoadingText text={'Fetching Pokemon'} extraClasses={'fetching'} />
        )
    }   
    return (
        <div className='isItShiny'>
            <Streak streak={streak} highest={highest}/>            
            {response === null && (
                <>
                    <PokemonDisplay pokemon={pokemon} isShiny={isShiny} />
                    <div className='buttons'>
                        <button onClick={()=> handleAwnser(true)}>Yes</button>
                        <button onClick={()=> handleAwnser(false)}>No</button>
                    </div>
                </>
            )}
            {response != null && (
                    response ? <LoadingText text={'Muy bien! Cargando el siguiente Pokemon'} extraClasses={'response'}/> : <LoadingText text={'Ay no! Mejor suerte con el próximo'} extraClasses={'response'}/>
            )}
        </div>
    )
}

export default ShinyGame