import { collection, firestore, getDocs, query } from "../firebase/firebase-init"


export const loadNotes = async (uid) => {
  const notesSnap = collection(firestore, `${uid}/journal/notes`)
  const docs = await getDocs(query(notesSnap))
  const notes = []
  
  docs.forEach(snapHijo => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data()
    })
  })
  console.log(notes);

  return notes;
}