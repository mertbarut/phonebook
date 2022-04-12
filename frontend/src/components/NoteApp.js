import NewNote from './NewNote'
import Notes from './Notes'
import NoteVisibilityFilter from './NoteVisibilityFilter'

const App = () => {
  return (
    <div>
      <NewNote />
      <NoteVisibilityFilter />
      <Notes  />
    </div>
  )
}

export default App