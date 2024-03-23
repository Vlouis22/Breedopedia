import React from 'react'

export const CatCard = ({ getNewCat, name, weight, origin, image, life_span, description, addtoBan }) => {
    return (
        <div className='cat--container'>
            <h1>Breedopedia</h1>
            <h4>{name}</h4>
            <p>{description}</p>
            <div className='cat--description'>
                <p onClick={addtoBan}>{weight} lbs</p>
                <p onClick={addtoBan}>{origin}</p>
                <p onClick={addtoBan}>{life_span} years</p>
            </div>
            <img src={image} className='cat--image' alt='No Image Found '></img>
            <button onClick={getNewCat} className='discover--button'>Discover</button>
        </div>
    )
}
