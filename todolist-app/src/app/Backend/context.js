'use client'
import { useEffect, useReducer,useContext, createContext,useState } from 'react';
import { Reducer } from '../Backend/Reduce';
import { collection, getDocs, addDoc} from 'firebase/firestore';
import { db } from '../FireBase/config';
import  Data from '../Data/data';

export const TodoContext = createContext();

const initialState = {
  todos: Data.AllTasks,
  visibilityFilter: 'All',
  
};
export default function TodoContextProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
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
          // uid: doc.data().uid,
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
// export const appProps = () =>{
//   return useContext(TodoContext);
// }
