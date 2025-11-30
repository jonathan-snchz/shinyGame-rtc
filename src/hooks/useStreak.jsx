import { useState } from "react"

const useStreak = () => {
    const [streak, setStreak] = useState(0)
    const [highest, setHighest] = useState(0)

    const increment = ()=>{
        setStreak(prev => {
            const newStreak = prev + 1;
            setHighest(prev => newStreak > prev ? newStreak : prev)
            return newStreak
        })
    }

    const reset = ()=>{
        setStreak(0)
    }

    return [streak, highest, increment, reset]
}

export default useStreak