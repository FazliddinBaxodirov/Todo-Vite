import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import Modal from './Modal'
import toast from 'react-hot-toast'

export default function List() {
    const {todos,deleteTodo,updateTodo} = useContext(Context)
    const [isOpen,setisOpen] = useState(false)  
    const [inputValue , setInputValue] = useState("")
    const [updateId,setUpdateId] = useState(0)
    function update(id){
        setUpdateId(id)
        setisOpen(true)
        const updated = todos.find(val => val.id == id)
        setInputValue(updated.title)
    }

    function handleUpdate(e){
        e.preventDefault()
        updateTodo(updateId,inputValue)
        setisOpen(false)
        toast.success("Update qilindi!")
    }
  return (

    <>
    <ul className="list w-[50%] mx-auto mt-[10px] p-5 flex flex-col gap-3 bg-white rounded-[10px]">
    {todos.map((item,index) => (
        <li key={index} className='w-full px-[5px] py-[10px] rounded-md bg-violet-400 flex justify-between items-center '>
            <div className='flex text-white text-[20px]'>
                <span>{index + 1}.</span>
                <p>{item.title}</p>
            </div>
            <div className='flex gap-[5px]'>
                <input type='checkbox'/>
                <button onClick={() => update(item.id)} className='p-3 bg-green-500 rounded-[12px] text-white font-medium'>Update</button>
                <button onClick={() => deleteTodo(item.id)} type='button' className='p-3 bg-red-500 rounded-[12px] text-white font-medium'>Delete</button>
            </div>
        </li>
    ))}
    </ul>
    <Modal isOpen={isOpen} setisOpen={setisOpen}>
        <form onSubmit={handleUpdate} className='flex flex-col gap-[10px] p-2'>
            <h3 className='mx-auto text-[35px] text-violet-600'>Update your Todo</h3>
            <input className='w-full p-3 py-[5px] border-[2px] outline-none rounded-md focus:border-violet-700 focus:shadow-md' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button type='submit' className='w-full p-[5px] py-[6px] bg-violet-600 text-white rounded-md '>Update</button>
        </form>
    </Modal>
    </>
    
  ) 
}
