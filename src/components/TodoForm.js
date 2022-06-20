import React, {useState,useEffect,useRef}from 'react'
// import DatePicker from "react-datepicker";

function TodoForm(props) {
    // const [currentDate, setCurrentDate] = useState(new Date());
    const [input, setInput] = useState(props.edit ? props.edit.value : '' );

    const inputRef= useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleChange = e =>{
        setInput(e.target.value);
    }
    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('')
        
    }
  return (
    
    <form className='todo-form' onSubmit={handleSubmit}>
       
         
        <input type='text' placeholder='add a todo' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef}/>
    <button className='todo-button'>Add todo</button>
    {/* <DatePicker showTimeSelect selected={currentDate} onChange={date => setCurrentDate(date)} /> */}
    </form>
  )
}

export default TodoForm