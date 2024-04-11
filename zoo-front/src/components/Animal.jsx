import React from 'react'

const Animal = ({ animal, handleDelete, setShow }) => {
  const { id, name, type, weight, lives_in_zoo } = animal
  return (
    <li>
      <span>{id}</span>
      <span>{name}</span>
      <span>{type}</span>
      <span>{weight}</span>
      <span>{lives_in_zoo}</span>
      <div>
        <button onClick={() => setShow(id)}>Edit</button>
        <button onClick={() => handleDelete(id)}>Remove</button>
      </div>
    </li>
  )
}

export default Animal
