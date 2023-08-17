import React from 'react'

const NameDetailesPage = ({selectedName}) => {
  return (
    <div>
       <h1>{selectedName.name}</h1>
       <p>{selectedName.transliteration}</p>
       <p>{selectedName.meaning}</p>
       <p>{selectedName.desc}</p>
       <p>{selectedName.found}</p>

    </div>
    
  )
}

export default NameDetailesPage