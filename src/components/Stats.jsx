import React, { useContext } from 'react'
import { ProgressContext } from '../context/ProgressContext'
import { gens } from '../utils/generationsData'

const Stats = () => {
    
    const { progress } = useContext(ProgressContext)

     if (!progress) {
        return (
            <div className='stats'>
                <h2>Loading Statistics...</h2>
                <p>No game data available yet.</p>
            </div>
        );
    }

    const genName = () => {
        const gen = gens.find(gen => gen.id === progress.favGen)
        return gen ? `${gen.region}, ${gen.name.replace(["GEN"], "Generation")}` : 'Not enough data!' 
    }
    

    return (
        <div className='Stats'>
            <h3>Games played: {progress.gamesPlayed} </h3>
            <h3>Games won: {progress.gamesWon}</h3>
            <h3>Most played generation: {genName()}</h3>
            <h3>Best Streak: {progress.bestStreak}</h3>
        </div>
    )
}

export default Stats