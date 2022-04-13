import { useEffect } from 'react'
import NewNote from './NewNote'
import Notes from './Notes'
import NoteVisibilityFilter from './NoteVisibilityFilter'
import noteService from '../services/notes'
import { initializeNotes, setNotes } from '../reducers/noteDisplayReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes())
  }, [])

  return (
    <div>
      <NewNote />
      <NoteVisibilityFilter />
      <Notes  />
    </div>
  )
}

export default App