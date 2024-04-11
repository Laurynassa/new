import React from 'react'
import Animal from './Animal'

const AnimalsList = ({ handleDelete, setShow, animalList }) => {
  return (
    <div className="list">
      {animalList?.map((animal) => (
        <Animal
          key={animal.id}
          animal={animal}
          handleDelete={handleDelete}
          setShow={setShow}
        />
      ))}
    </div>
  )
}

export default AnimalsList
