import { createContext,useContext } from "react"
export const ToDoContext = createContext({
    todos: [
        {
            id : 1,
            task: "Eat dinner",
            completed: false,
        }
    ],
    addToDo : (task) => {},
    updateToDo : (id,todo) => {},
    deleteToDo : (id) => {},
    toggleComplete : (id) => {},
})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider