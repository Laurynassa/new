import React, { useState } from 'react'

const SortingComponent = ({ sort }) => {
  const [select, setSelect] = useState('a-z')
  return (
    <header style={{ backgroundColor: 'limegreen', height: '80px' }}>
      <h1>Sort by:</h1>
      <select
        value={select}
        onChange={(e) => {
          setSelect(e.target.value)
          sort(e.target.value)
        }}
      >
        <option value="a-z">A-Z weight</option>
        <option value="z-a">Z-A weight</option>
        <option value="name_a-z">A-Z name</option>
        <option value="name_z-a">Z-A name</option>
      </select>
    </header>
  )
}

export default SortingComponent
