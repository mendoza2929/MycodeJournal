import React, {useState} from 'react'
import TodoList from '../TodoList'
import TodoForm from './TodoForm'
import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'

function Todo({todos,completeTodo,removeTodo,updateTodo}) {
    const [edit, setEdit]=useState({
        id:null,
        valie:''
    })

    const submitUpdate = value =>{
      updateTodo(edit.id,value)
      setEdit({
        id:null,
        value:''
      })
    }

    if (edit.id){
      return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

  return todos.map((todo,index)=>(
    <div className={todo.isComplete ? 'todo-row Complete': 'todo-row'} key={index}>

        <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
        <MdDeleteForever onClick={()=> removeTodo(todo.id)} className='delete-icon'/>
        <AiFillEdit onClick={()=> setEdit({id:todo.id,value:todo.text})} className='edit-icon'/>
        </div>
 
    </div>
  )) 
}

export default Todo