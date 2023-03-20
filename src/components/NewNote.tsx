import React from 'react'
import { NoteData, Tag } from '../App'
import FormNote from './FormNote'

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

const NewNote = ({onSubmit,onAddTag, availableTags}: NewNoteProps) => {
  return (
    <div>
        <h1 className='mb-4'>New Note</h1>
        <FormNote onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags}/>
    </div>
  )
}

export default NewNote