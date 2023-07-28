'use client'
import { db } from '../FireBase/config';
import {doc, addDoc, collection} from 'firebase/firestore';
export const Reducer = (state, action) => {
 
  const { todos, visibilityFilter, uid } = state;
  switch (action.type) {
    case 'INITIALIZE_TODO':
      return {
        todos: action.payload.todos,
        visibilityFilter,
      };
    case 'ADD_TODO': {
      const todo = [
        {
          id: Math.random().toString(16).substring(2),
          isActive: false,
          task:action.payload,
          isComplete:false
        },
        ...todos,
      ];

      addDoc(collection(db,"todos"),{todos:todo});
      return {
        todos: todo,
        visibilityFilter,
        uid,
      };
    }
    case 'DELETE_TODO': {
      addDoc(collection(db,"todos"),{todos:action.payload})
      return {
        todos: action.payload,
        visibilityFilter,
        uid,
      };
    }
    case 'COMPLETE_TODO': {
      addDoc(collection(db,'todos'),{todos:action.payload})
      return {
        todos: action.payload,
        visibilityFilter,
        uid,
      };
    }
    
    case 'CLEAR_COMPLETED': {
      addDoc(collection(db,'todos'),{todos:action.payload})
      return {
        todos: action.payload,
        visibilityFilter,
        uid,
      };
    }
    

    case 'SET_VISIBILITY':
      return {
        todos: [...todos],
        visibilityFilter: action.payload,
      };
    case 'SET_TODOS':
      return {
        todos: [...action.payload.todos],
        visibilityFilter,
        uid,
      };
    default:
      return state;
  }
};
