import { createContext, useCallback, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProgressContext = createContext();

const defaultProgress = {
    gamesPlayed: 0,
    gamesWon: 0,
    favGen: null,
    gens: {},
    bestStreak: 0
}

export const ProgressContextProvider = ({children}) => {
    const [progress, setProgress] = useState( () => {
        const savedProgress = localStorage.getItem('userProgress');
        if (savedProgress) {
            const parsed = JSON.parse(savedProgress);
            return({
                ...defaultProgress,
                ...parsed,
                gamesPlayed: Number(parsed.gamesPlayed) || 0,
                gamesWon: Number(parsed.gamesWon) || 0,
                bestStreak: Number(parsed.bestStreak) || 0,
                favGen: parsed.favGen || null,
                gens: parsed.gens || {}
            });
        }
        return defaultProgress
    });
        
    const updateProgress = useCallback((result, genId = null, currentStreak = 0) => {
        setProgress((prevProgress) => {
                const newProgrress = {
                    ...prevProgress,
                    gamesPlayed: prevProgress.gamesPlayed + 1,
                    gamesWon: result ? prevProgress.gamesWon + 1 : prevProgress.gamesWon,
                }
                if(prevProgress.bestStreak < currentStreak){
                    newProgrress.bestStreak = currentStreak
                }
                if (genId) {
                    newProgrress.gens = {
                        ...prevProgress.gens,
                        [genId] : (prevProgress.gens[genId] || 0) +1
                    }

                    const currentGenCount = newProgrress.gens[genId]
                    if (!newProgrress.favGen || currentGenCount > newProgrress.gens[newProgrress.favGen]) {
                        newProgrress.favGen = parseInt(genId);
                    }
                }
                return newProgrress
            })  
        }, [])
    
    useEffect(()=>{
        localStorage.setItem('userProgress', JSON.stringify(progress))
    }, [progress])
    
    return(
            <ProgressContext.Provider value={{
                progress,
                updateProgress
            }}>
                {children}
            </ProgressContext.Provider>
        )
}