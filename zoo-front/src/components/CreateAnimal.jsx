import React from 'react'
import { useState } from 'react'
export const CreateAnimal = ({ setCreate }) => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [weight, setWeight] = useState('')
  const [livesinzoo, setLivesinzoo] = useState(0)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    setCreate({ name, type, weight, lives_in_zoo: livesinzoo })
    console.log(name, type, weight, livesinzoo)

    setName('')
    setType('')
    setWeight('')
    setLivesinzoo(0)
  }
  return (
    <div>
      <h1>Create animal record</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Animal name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Animal type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <br />
        <label>Animal weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <label>Does Animal live_in_zoo?</label>
        <input
          type="checkbox"
          checked={livesinzoo}
          onChange={() => setLivesinzoo((prev) => (prev ? 0 : 1))}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}
