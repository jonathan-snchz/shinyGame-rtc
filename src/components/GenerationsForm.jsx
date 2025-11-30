import React, { useState } from 'react'
import { gens } from '../utils/generationsData';
import { useNavigate } from 'react-router-dom';

const GenerationsForm = () => {
    const [generations, setGenerations] = useState([]);
    const navigate = useNavigate();

    const toggleGenSelection = (genId) => {
        setGenerations(prev =>
            prev.includes(genId) ? prev.filter(id => id !== genId) : [...prev, genId]
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedGenerations = gens.filter(gen => generations.includes(gen.id))
        console.log(selectedGenerations);
        navigate("/game", {
            state: {gens: selectedGenerations}
        })
    }
    const clearSelection = () => {
        setGenerations([])
    }
    return (
        <div className='generations'>
            <h1>Which gens do you want to see?</h1>
            <form onSubmit={handleSubmit}>
                <div className='genCardsGrid'>
                    {gens.map(gen => (
                        <div className={`genCard ${generations.includes(gen.id) ? 'selected' : ''}`}  key={gen.id} onClick={() => toggleGenSelection(gen.id)}>
                            <h3>{gen.name}</h3>
                            <h3>{gen.region}</h3>
                            <input type="checkbox" checked={generations.includes(gen.id)} readOnly />
                        </div>
                    ))}
                </div>
                <div className='buttons'>
                    <button type="button" onClick={clearSelection}>Clear Selections</button>
                    <button onClick={() => navigate("/game")}>Continue with every Pokemon!</button>
                    <button type="submit" disabled={generations.length === 0}>Start whit the selected gens!</button>
                </div>
            </form>
        </div>
    )
}

export default GenerationsForm