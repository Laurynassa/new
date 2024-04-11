import React from 'react'
import EditAnimal from './EditAnimal'

const Modalus = ({ id, setShow, showData, setEdit }) => {
  return id === 0 ? null : (
    <div>
      <div>
        <button onClick={() => setShow(0)}>&times;</button>
      </div>
      <EditAnimal showData={showData()} setEdit={setEdit} setShow={setShow} />
    </div>
  )
}

export default Modalus
