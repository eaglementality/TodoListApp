'use client'
// import { appProps } from "../Backend/context";
import { TodoContext } from "../Backend/context";
import { Draggable } from "react-beautiful-dnd";
import {useContext} from 'react';

export const TaskCard = ({id, isActive, task, isComplete}) => {
    const {
        state , dispatch,Darktheme} = useContext(TodoContext);
    const {todos} = state;
   
    // const MakeActive = () => {
    //     const ifActive = state.todos.map(task => (task.id === id ? {...task, isActive: !task.isActive}: task))
    //     dispatch({type:'MAKE_ACTIVE', payload:ifActive});
    // }
    const complete_todo=()=>{
        const todo = todos.map((todo) =>todo.id === id ? { ...todo, isComplete: !todo.isComplete, isActive:!todo.isActive } : todo);
        dispatch({type:'COMPLETE_TODO', payload:todo});
       
    }
    const deleteTask = () => {
        const deletedTask = todos.filter(item => item.id !== id);
        dispatch({type:'DELETE_TODO',payload:deletedTask}); 
       

    }

    

    return (
        <Draggable draggableId={`${id}`} index={id} >
             {(provided) => {
                return (
                    <div className={`px-5 py-4 ${Darktheme ? 'bg-white text-black' : 'bg-dark text-white'}`}  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div  className="flex items-center">
                            <button type="button" onClick={() => complete_todo()} className={`${isActive ? 'bg-gradient-to-b from-blue-400  to-purple-400    text-white':''} flex items-center border  border-zinc-400 rounded-full`}>
                                <svg className='m-1.5' xmlns="http://www.w3.org/2000/svg" width="10" height="9"><path fill="none" stroke={`${isActive?"white":" "}`} strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>                  
                            </button>
                            <p  className={`${isComplete ? "line-through decoration-slate-400 text-slate-400": ""} ml-3 flex-1`} >{task}</p>
                            <button  type="button" onClick={() => deleteTask()}>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                            </button>
                        </div>
                    </div>
                    )
             }}
        </Draggable>
    );
} 