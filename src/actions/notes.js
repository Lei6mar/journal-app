import { addDoc, collection, firestore } from "../firebase/firebase-init"


export const startNewNote =  () => {
  return async (dispatch, getState) => {
    const {uid} = getState().auth
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    const collectionRef = collection(firestore,`${uid}/journal/notes`);
    const doc = await addDoc(collectionRef, newNote)
    console.log(doc);
  }
}