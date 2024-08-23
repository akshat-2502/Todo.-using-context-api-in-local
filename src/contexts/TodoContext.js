import {createContext, useContext} from 'react'

export const TodoContext = createContext({

    todos: [
        {
            id: 1,
            todo: "too msg", // msg that is to be displayed
            completed: false

        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo) => {},
    toggleComplete: (id)=> {},
    deleteTodo: (id)=> {}

})

const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}