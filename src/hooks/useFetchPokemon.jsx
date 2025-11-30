import { useCallback, useState } from "react";

const useFetchPokemon = () => {
    const [pokemon, setPokemon] = useState(null);
    const [isShiny, setIsShiny] = useState(false);
    
    const fetchPokemon = useCallback(async (generations = null) => {
        
        let pokeNumber
        let generation

        if (generations && generations.length > 0) {
            const randomGen = generations[Math.floor(Math.random()*generations.length)]
            generation = randomGen.range
        }
        else{
            generation = [1, 1025]
        }
        const minPokeNumber = generation[0];
        const maxPokeNumber = generation[1];
        pokeNumber = Math.floor(Math.random()*(maxPokeNumber - minPokeNumber +1)+ minPokeNumber);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`);
            setPokemon(await response.json());
            setIsShiny(Math.random()>0.5)
        } catch (error) {
            console.log("Couldn't get the pokemon, ", error);
        }
    }, [])
    
    return [fetchPokemon, pokemon, isShiny]
}

export default useFetchPokemon