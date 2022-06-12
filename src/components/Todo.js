import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './style.css'



const Todo = () => {
    const [inputData,setInputData]=useState('')
    const[tasks,setTasks]=useState([])
    const[comp,setComp]=useState([])

    const addTodo=(()=>{
        if(!inputData){

        }
        else{
        setTasks([...tasks,inputData])
        console.log(tasks)
        setInputData('')
        }
        
    })


    const deleteItem=((key)=>{
        
        const updatedTasks=tasks.filter((ele,id)=>{
            return id !== key


        })
        
        setTasks(updatedTasks)
    })


    const completedTasks =(key) => {
       setComp([...comp,tasks[key]])
        console.log(comp)
        deleteItem(key)

    };


  return (
    <div className='container' >
        
        <h1 className='heading' >Todo App</h1>
        
        
        <div className='todo-items'>
            <input className='todo-inputTask'
            value={inputData}
            onChange={(ev)=> setInputData(ev.target.value)}/>

            <button className='addbtn'type='submit' onClick={addTodo} >Add</button>
        </div>
        <div className='alltasks'>
        <div className='tasksOnGoing'>
            <h2>Tasks Todo</h2>
            {
                
                tasks.map((ele,index)=>{
                    return(

                    <div className='todo-item' key={index}>
                        <label>{ele}</label>
                        <div className='buttons' >

                        <button className='wrong'onClick={()=>deleteItem(index)}>🗙</button>
                        <button className='right' onClick={()=>completedTasks(index)}>✔</button>
                        </div>

                    </div>
                    )
                })
            }


        </div>

        <div className='completedItems' >
            <h2>Completed Tasks</h2>
            {
                comp.map((ele,index)=>{
                    return(
                    <div className='completedText' key={index}>
                        <label>{ele}</label>

                    </div>)
                })
            }

        </div>
        </div>


    </div>
  )
}

export default Todo