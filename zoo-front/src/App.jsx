import { useEffect, useState } from 'react'
import AnimalsList from './components/AnimalsList'
import { CreateAnimal } from './components/CreateAnimal'
import axios from 'axios'
import Modalus from './components/Modal'
import SortingComponent from './components/SortingComponent'

function App() {
  const [create, setCreate] = useState(null)
  const [updateTime, setUpdateTime] = useState(Date.now())
  const [animalList, setanimalList] = useState([])
  const [show, setShow] = useState(0)
  const [edit, setEdit] = useState(null)
  //DELETE
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3003/zoo/${id}`)
      .then((res) => setUpdateTime(Date.now()))
  }
  const showData = () => {
    return animalList.find((animal) => animal.id === show)
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
      .get('http://localhost:3003/zoo')
      .then((res) => setanimalList(res.data))
  }, [updateTime])
  //EDIT
  useEffect(() => {
    if (edit === null) {
      return
    }

    axios
      .put(`http://localhost:3003/zoo/${edit.id}`, edit)
      .then((res) => setUpdateTime(Date.now()))
  }, [edit])

  useEffect(() => {
    console.log(show)
  }, [show])

  const sortHandler = (value) => {
    const copy = [...animalList]

    //   switch (value) {
    //     case 'a-z':
    //       setanimalList(copy.sort((a, b) => a.weight - b.weight))
    //       break;
    //     case 'z-a':
    //       setanimalList(copy.sort((a, b) => a.weight - b.weight))
    //       break;
    //   }
  }
  return (
    <div className="App">
      <>
        <SortingComponent sort={sortHandler} />
        <CreateAnimal setCreate={setCreate} />
        <AnimalsList
          animalList={animalList}
          handleDelete={handleDelete}
          setShow={setShow}
        />
        <Modalus
          id={show}
          setShow={setShow}
          showData={showData}
          setEdit={setEdit}
        />
      </>
    </div>
  )
}

export default App
