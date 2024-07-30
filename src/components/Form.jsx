import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Toaster } from 'react-hot-toast'

export default function Form() {
    const {todos,saveTodo} = useContext(Context)
    const handleClickSub = (e) => {
        e.preventDefault()
        const todo = {
            id:todos.length + 1,
            title:e.target.text.value,
            isComplated:false
        }
        saveTodo(todo)
        e.target.reset()
    }
  return (
    <>
    <Toaster position="top-right" reverseOrder={false}/>
    <form onSubmit={handleClickSub} className='w-[50%] mx-auto mt-[20px] p-5 bg-white rounded-[10px]'>
            <div className="flex justify-between">
              <h2 className="text-[25px] font-semibold text-violet-600">Create your Todo</h2>
              <input type="search" className="search-input w-[30%] p-[5px] outline-none border-[1px] border-violet-300 border-dashed rounded-[12px] text-violet-400 focus:border-violet-500 focus:shadow-lg" placeholder="Search"/>
            </div>
            <div className="flex justify-between mt-[20px]">
                <input name='text' className="w-[72%] p-[12px] outline-none border-[2px] border-violet-300 rounded-[12px] text-violet-400 focus:border-violet-500 focus:shadow-lg" type="text" placeholder="Enter name of your Todo...."/>
                <button className="w-[26%] bg-violet-500 rounded-[12px] border-[1px] border-transparent text-white font-semibold hover:border-violet-600 hover:text-violet-600 hover:bg-transparent transition-400 transition" type="submit">Enter</button>
            </div>
            <label className="py-5 pl-3 inline-block">
              <input type="file" className="choose-input hidden"/>
            </label>
    </form>
    </>
  )
}
