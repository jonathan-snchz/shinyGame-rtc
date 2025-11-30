import React from 'react'

const Streak = ({streak, highest}) => {
    return (
        <div className='streak'>
            <h3>Current Streak: {streak}</h3>
            <h3>Highest Streak: {highest}</h3>
        </div>
    )
}

export default Streak