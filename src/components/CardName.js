import React from 'react'

const CardName = ({name , onSelectCard}) => {
  return (
    <div onClick={() => onSelectCard(name)}>
      <h1>{name.name}</h1>
      <p>{name.transliteration}</p>
    </div>
    
  )
}

export default CardName