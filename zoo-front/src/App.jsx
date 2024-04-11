import { useEffect, useState } from 'react'
import AnimalsList from './components/AnimalsList'
import { CreateAnimal } from './components/CreateAnimal'
import axios from 'axios'
import Modalus from './components/Modal'

function App() {
  const [create, setCreate] = useState(null)
  const [updateTime, setUpdateTime] = useState(Date.now())
  const [animalList, setanimalList] = useState([])
  const [show, setShow] = useState(0)
  //DELETE
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3003/zoo/${id}`)
      .then((res) => setUpdateTime(Date.now()))
  }

  //POST
  useEffect(() => {
    if (create === null) {
      return
    }

    axios
      .post('http://localhost:3003/zoo', create)
      .then((res) => setUpdateTime(Date.now()))
  }, [create])
  //GET
  useEffect(() => {
    axios
      .get('http://localhost:3003/zoo', create)
      .then((res) => setanimalList(res.data))
  }, [updateTime])

  useEffect(() => {
    console.log(show)
  }, [show])
  return (
    <>
      <CreateAnimal setCreate={setCreate} />
      <AnimalsList
        animalList={animalList}
        handleDelete={handleDelete}
        setShow={setShow}
      />
      <Modalus id={show} setShow={setShow} />
    </>
  )
}

export default App
