'use client'
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import Data from '../Data/data';

export function createUser(uid) {
  // Add a new document with a generated id
  const user = doc(collection(db, 'users'), uid);
  setDoc(user, { uid, todos:Data.AllTasks }, { merge: true });
}
