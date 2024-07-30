import {createContext, useState} from "react";
import toast from "react-hot-toast";

const Context = createContext()

const TodoContext = ({children}) => {
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || [])
    function saveTodo(obj){
        setTodos([...todos,obj])
        toast.success("Ma'lumot muvaffaqiyatli qo'shildi!")
    }

    function deleteTodo(id){
        const findedIndex = todos.findIndex(item => item.id == id)
        todos.splice(findedIndex,1)
        setTodos([...todos])
        toast.success( "Muvaffaqiyatli o'chirildi!")
    }
    function updateTodo(id, value){
        const ubdatedEl = todos.find(item => item.id === id)
        ubdatedEl.title = value
        setTodos([...todos])
    }
    window.localStorage.setItem("todos", JSON.stringify(todos))
    return(
        <Context.Provider value={{todos, setTodos,saveTodo,deleteTodo,updateTodo}}>{children}</Context.Provider>
    )
}

export {Context,TodoContext}