import { addDoc, collection, firestore } from "../firebase/firebase-init"
import { types } from "../types/types"

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
    dispatch(activeNote(doc.id, newNote))
  }
}

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
})

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
})

