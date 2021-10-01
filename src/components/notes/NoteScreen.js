import React from 'react'
import { NotesAppbar } from './NotesAppbar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppbar />
      <div className="notes__content">
        <input type="text" placeholder="some awesome title" className="notes__title-input" autoComplete="off"/>
        <textarea
          placeholder="what happened today"
          className="notes__textarea"></textarea>
          <div className="notes__image">
            <img src="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg" alt="Imagen"/>
          </div>
      </div>
    </div>
  )
}
