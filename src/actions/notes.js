import Swal from "sweetalert2";
import { addDoc, collection, doc, firestore, updateDoc } from "../firebase/firebase-init";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const collectionRef = collection(firestore, `${uid}/journal/notes`);
    const doc = await addDoc(collectionRef, newNote);
    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if(!note.url){
      delete note.url
    }

    const noteToFirestore = {...note}
    delete noteToFirestore.id
    const document = doc(firestore, `${uid}/journal/notes/${note.id}`)
    await updateDoc(document, noteToFirestore)
    dispatch(refreshNote(note.id, noteToFirestore))
    Swal.fire('Saved', note.title, 'success')
  }
}

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id, note : {
      id, ...note
    }
  }
})