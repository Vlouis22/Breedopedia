import React from 'react'

export const Banlist = ({banlist}) => {

    console.log(banlist)


    const banfromlist = banlist.map((ban, index)=>(
        <li key={index} className='ban--from--list'>{ban}</li>
    )
    )
    
  return (
    <div className='banlist--container'>
        <h1>Ban List</h1>
        <p>select an attribute in your listing to ban it</p>
        <ul>
            {banfromlist}
        </ul>
    </div>
  )
}
