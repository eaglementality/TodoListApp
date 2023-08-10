'use client'
<<<<<<< HEAD
import{ useEffect, useReducer,useContext, createContext,useState } from 'react';
import { reducer } from '../Backend/reduce';
=======
import { useEffect, useReducer,useContext, createContext,useState } from 'react';
import { Reducer } from '../Backend/Reduce';
>>>>>>> b68bb6bd64edb96c7ca98c582095847a15814e9f
import { collection, getDocs, addDoc} from 'firebase/firestore';
import { db } from '../FireBase/config';
import  Data from '../Data/data';

export const TodoContext = createContext();

<<<<<<< HEAD


=======
>>>>>>> b68bb6bd64edb96c7ca98c582095847a15814e9f
const initialState = {
  todos: Data.AllTasks,
  visibilityFilter: 'All',
  
};
export default function TodoContextProvider(props) {
<<<<<<< HEAD
  const [state, dispatch] = useReducer(reducer, initialState);
=======
  const [state, dispatch] = useReducer(Reducer, initialState);
>>>>>>> b68bb6bd64edb96c7ca98c582095847a15814e9f
  const [Darktheme, setDarktheme] = useState(true);
  const [Icon_light_and_dark, setIcon_light_and_dark]=useState(true);
  



  //    function to retrieve the todos from firestore
  const getTodos = async () => {
    const querySnapshot = await getDocs(collection(db,'todos'));
    querySnapshot.forEach((doc) => {
      dispatch({
        type: 'INITIALIZE_TODO',
        payload: {
          todos: doc.data().todos,
        },
      });
    });
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider value={
      {
        state, dispatch,
        Darktheme, setDarktheme,
        Icon_light_and_dark, setIcon_light_and_dark
        }
    }>{props.children}</TodoContext.Provider>
  );
}
<<<<<<< HEAD
// export function appProps(){
//   return useContext(TodoContext);
// }
=======

>>>>>>> b68bb6bd64edb96c7ca98c582095847a15814e9f
