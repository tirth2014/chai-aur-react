import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './contexts/TodoContext'
import {ToDoForm, ToDoItem} from './components/index'

function App() {

  // todos is a list of todo objects
  const [todos, setTodos] = useState([])

  const addToDo = (task) => {
    setTodos((prevTodos) => ([...prevTodos, {id: Date.now(), task: task}]))
  }

  const updateToDo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteToDo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(prevTodo => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos
      .map((prevTodo) => prevTodo.id === id
        ? { ...prevTodo, completed: !prevTodo.completed }
        : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}>
      <div className='bg-[#172842] min-h-screen min-w-full py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2 '>Manage Your ToDos</h1>
          <div className='mb-4'>
            {/* ToDo Form */}
            <ToDoForm/>
          </div>
          <div>
            {/* Loop and add todo item here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'> 
                <ToDoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
