'use client'
import{ useEffect, useReducer,useContext, createContext,useState } from 'react';
import { reducer } from '../Backend/reduce';
// import { collection, getDocs, query, where } from 'firebase/firestore';
import { collection, getDocs, addDoc} from 'firebase/firestore';
import { db } from '../FireBase/config';
// import { useAuth } from '../FireBase/auth';
import  Data from '../Data/data';

export const TodoContext = createContext();

// const initialState = {
//   todos: [
//     {
//       text: 'Eat apple',
//       completed: false,
//       id: 'b967afe24b23',
//     },
//     {
//       text: 'Take dog for a walk',
//       completed: true,
//       id: '43286487fhsdjasd',
//     },
//     {
//       text: 'Listen to music',
//       completed: false,
//       id: '54937fhajd',
//     },
//     {
//       text: 'Yoga setion',
//       completed: true,
//       id: '43242341aaaaa',
//     },
//     {
//       text: 'Prepare the dinner',
//       completed: true,
//       id: 'b967afe24a13',
//     },
//   ],
//   visibilityFilter: 'All',
// };

const initialState = {
  todos: Data.AllTasks,
  visibilityFilter: 'All',
  uid: '',
};
export default function TodoContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Darktheme, setDarktheme] = useState(true);
  const [Icon_light_and_dark, setIcon_light_and_dark]=useState(true);
  
  // const auth = useAuth();
//function to add to the todos in the firestore


  //    function to retrieve the todos from firestore
  const getTodos = async () => {
    // const q = query(collection(db, 'users'), where('uid', '==', auth.user.uid));
    const querySnapshot = await getDocs(collection(db,'todos'));
    querySnapshot.forEach((doc) => {
      //  doc.data() is never undefined for query doc snapshots
      dispatch({
        type: 'INITIALIZE_TODO',
        payload: {
          todos: doc.data().todos,
          uid: doc.data().uid,
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
// export function appProps(){
//   return useContext(TodoContext);
// }
