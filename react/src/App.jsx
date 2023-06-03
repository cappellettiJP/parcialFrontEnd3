import { useState } from 'react'
import './App.css'
import Form from './components/Forms/Form'
import Cards from './components/Cards/Cards'

let autoId = 0

function App() {
  const [users, setUsers] = useState([])
  

  const handleSubmit = (values) => {
    setUsers([...users, { id: autoId++,data: values}])
  }

  return (
    <>
      <div>
      <Form onSubmit={handleSubmit} />
      <h3>Valores ingresados:</h3>
      <Cards />
      </div>
    </>
  )
}

export default App
